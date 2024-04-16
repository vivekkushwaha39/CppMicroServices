#include <algorithm>
#include <any>
#include <assert.h>
#include <iostream>
#include <list>
#include <map>
#include <memory>
#include <sstream>
#include <unordered_map>
#include <variant>
#include <vector>

namespace cppmicroservices
{

    namespace new_any
    {
        namespace detail
        {

            struct any_map_cihash
            {
                std::size_t
                operator()(std::string const& key) const
                {
                    std::string lcase = key;
                    std::transform(lcase.begin(), lcase.end(), lcase.begin(), ::tolower);
                    return std::hash<std::string> {}(lcase);
                }
            };

            struct any_map_ciequal
            {
                bool
                operator()(std::string const& l, std::string const& r) const
                {
                    return (l.size() == r.size()
                            && std::equal(l.begin(),
                                          l.end(),
                                          r.begin(),
                                          [](char a, char b) { return tolower(a) == tolower(b); }));
                }
            };
        } // namespace detail
        template <typename T>
        class recursive_wrapper
        {
          public:
            recursive_wrapper() : ptr(std::make_unique<T>()) {}

            recursive_wrapper(T const& value) : ptr(std::make_unique<T>(value)) {}

            recursive_wrapper(T&& value) : ptr(std::make_unique<T>(std::move(value))) {}

            recursive_wrapper(recursive_wrapper const& other) : ptr(std::make_unique<T>(*other.ptr)) {}

            recursive_wrapper(recursive_wrapper&&) noexcept = default;

            recursive_wrapper&
            operator=(recursive_wrapper const& other)
            {
                *ptr = *other.ptr;
                return *this;
            }

            recursive_wrapper&
            operator=(recursive_wrapper&& other)
            {
                if (this == &this)
                {
                    return *this;
                }
                *ptr = *other.ptr;
                return *this;
            }

            bool
            operator==(recursive_wrapper const& other)
            {
                if (this == &other)
                {
                    return true;
                }
                return *ptr == *other.ptr;
            }

            T&
            get()
            {
                return *ptr;
            }
            T const&
            get() const
            {
                return *ptr;
            }

            operator T&() { return get(); }
            operator T const&() const { return get(); }

          private:
            std::unique_ptr<T> ptr;
        };

        class AnyMap;
        struct Any;
        bool operator==(Any const& v1, Any const& v2);
        bool operator==(AnyMap const& v1, AnyMap const& v2);
        bool operator!=(Any const& v1, Any const& v2);
        bool operator!=(AnyMap const& v1, AnyMap const& v2);

        using tAnyVariant
            = std::variant<std::string, double, int, bool, recursive_wrapper<Any>, std::vector<Any>, AnyMap>;

        inline std::string anyVariantToJson(tAnyVariant const& node, int indent = 0);
        inline std::string anyMapToJson(AnyMap const& map);

        class AnyMap
        {
          public:
            using key_type = std::string;
            using mapped_type = tAnyVariant;
            using value_type = std::pair<const key_type, mapped_type>;
            using size_type = std::size_t;
            using difference_type = std::ptrdiff_t;
            using reference = value_type&;
            using const_reference = value_type const&;
            using pointer = value_type*;
            using const_pointer = value_type const*;
            using ordered_any_map = std::map<std::string, tAnyVariant>;
            using unordered_any_map = std::unordered_map<std::string, tAnyVariant>;
            using unordered_any_cimap
                = std::unordered_map<std::string, tAnyVariant, detail::any_map_cihash, detail::any_map_ciequal>;

            enum map_type : uint8_t
            {
                ORDERED_MAP,
                UNORDERED_MAP,
                UNORDERED_MAP_CASEINSENSITIVE_KEYS
            };

            union
            {
                ordered_any_map* o;
                unordered_any_map* uo;
                unordered_any_cimap* uoci;
            } map;

            ordered_any_map const&
            o_m() const
            {
                return *map.o;
            }
            ordered_any_map&
            o_m()
            {
                return *map.o;
            }
            unordered_any_map const&
            uo_m() const
            {
                return *map.uo;
            }
            unordered_any_map&
            uo_m()
            {
                return *map.uo;
            }
            unordered_any_cimap const&
            uoci_m() const
            {
                return *map.uoci;
            }
            unordered_any_cimap&
            uoci_m()
            {
                return *map.uoci;
            }

            inline void
            copy_from(new_any::AnyMap const& other)
            {
                switch (other.type)
                {

                    case map_type::ORDERED_MAP:
                        map.o = new ordered_any_map(other.o_m());
                        break;
                    case map_type::UNORDERED_MAP:
                        map.uo = new unordered_any_map(other.uo_m());
                        break;
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        map.uoci = new unordered_any_cimap(other.uoci_m());
                        break;
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            inline void
            move_from(new_any::AnyMap&& other) noexcept
            {
                switch (other.type)
                {
                    case map_type::ORDERED_MAP:
                        map.o = other.map.o;
                        other.map.o = nullptr;
                        break;
                    case map_type::UNORDERED_MAP:
                        map.uo = other.map.uo;
                        other.map.uo = nullptr;
                        break;
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        map.uoci = other.map.uoci;
                        other.map.uoci = nullptr;
                        break;
                }
            }
            inline void
            destroy() noexcept
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        delete map.o;
                        break;
                    case map_type::UNORDERED_MAP:
                        delete map.uo;
                        break;
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        delete map.uoci;
                        break;
                }
            }

            AnyMap(new_any::AnyMap::map_type mapType = new_any::AnyMap::map_type::ORDERED_MAP) : type { mapType }
            {
                map.o = new ordered_any_map();
            }
            AnyMap(std::any const& other) {}
            template <class T>
            AnyMap(std::map<std::string, T> const& other) : type { new_any::AnyMap::map_type::ORDERED_MAP }
            {
                map.o = new ordered_any_map();
                for (auto const& [key, value] : other)
                {
                    insert(std::make_pair(key, tAnyVariant { value }));
                }
            }

            AnyMap(std::initializer_list<std::pair<std::string, tAnyVariant>> const& list) : AnyMap()
            {

                for (auto const& item : list)
                {
                    insert(item);
                }
            }

            AnyMap(AnyMap const& other)
            {
                if (this == &other)
                {
                    return;
                }

                type = other.type;
                copy_from(other);
            }
            ~AnyMap() { destroy(); }
            AnyMap&
            operator=(AnyMap const& other)
            {
                if (this == &other)
                {
                    return *this;
                }
                destroy();
                type = other.type;
                copy_from(other);
                return *this;
            }

            std::string
            ToJson()
            {
                return anyMapToJson(*this);
            }

          public:
            class iterator_base
            {
                friend class AnyMap;

              protected:
                enum iter_type : uint8_t
                {
                    NONE,
                    ORDERED,
                    UNORDERED,
                    UNORDERED_CI
                };

                iter_type type { NONE };

                iterator_base()

                    = default;

                iterator_base(iter_type type) : type(type) {}

              public:
                using value_type = value_type;

                using iterator_category = std::forward_iterator_tag;
                using difference_type = difference_type;
            };

            class iter;

            class const_iter : public iterator_base
            {
              private:
                using ociter = ordered_any_map::const_iterator;
                using uociter = unordered_any_map::const_iterator;
                using uocciiter = unordered_any_cimap::const_iterator;

              public:
                using reference = const_reference;
                using pointer = const_pointer;

                using iterator = const_iter;
                const_iter() = default;
                const_iter(iterator const& it) : iterator_base(it.type), it { nullptr }
                {
                    switch (type)
                    {
                        case ORDERED:
                            this->it.o = new ociter(it.o_it());
                            break;
                        case UNORDERED:
                            this->it.uo = new uociter(it.uo_it());
                            break;
                        case UNORDERED_CI:
                            this->it.uoci = new uocciiter(it.uoci_it());
                            break;
                        case NONE:
                            break;
                        default:
                            throw std::logic_error("invalid iterator type");
                    }
                }
                const_iter(iter const& it);
                ~const_iter()
                {
                    switch (type)
                    {
                        case ORDERED:
                            delete it.o;
                            break;
                        case UNORDERED:
                            delete it.uo;
                            break;
                        case UNORDERED_CI:
                            delete it.uoci;
                            break;
                        case NONE:
                            break;
                    }
                }

                const_iter(ociter&& it) : iterator_base(ORDERED) { this->it.o = new ociter(std::move(it)); }

                const_iter(uociter&& it, iter_type type) : iterator_base(type)
                {
                    switch (type)
                    {
                        case UNORDERED:
                            this->it.uo = new uociter(std::move(it));
                            break;
                        case UNORDERED_CI:
                            this->it.uoci = new uocciiter(std::move(it));
                            break;
                        default:
                            throw std::logic_error("type for unordered_map iterator not supported");
                    }
                }

                reference
                operator*() const
                {
                    switch (type)
                    {
                        case ORDERED:
                            return *o_it();
                        case UNORDERED:
                            return *uo_it();
                        case UNORDERED_CI:
                            return *uoci_it();
                        case NONE:
                            throw std::logic_error("cannot dereference an invalid iterator");
                        default:
                            throw std::logic_error("invalid iterator type");
                    }
                }
                pointer
                operator->() const
                {
                    switch (type)
                    {
                        case ORDERED:
                            return o_it().operator->();
                        case UNORDERED:
                            return uo_it().operator->();
                        case UNORDERED_CI:
                            return uoci_it().operator->();
                        case NONE:
                            throw std::logic_error("cannot dereference an invalid iterator");
                        default:
                            throw std::logic_error("invalid iterator type");
                    }
                }

                iterator&
                operator++()
                {
                    switch (type)
                    {
                        case ORDERED:
                            ++o_it();
                            break;
                        case UNORDERED:
                            ++uo_it();
                            break;
                        case UNORDERED_CI:
                            ++uoci_it();
                            break;
                        case NONE:
                            throw std::logic_error("cannot increment an invalid iterator");
                        default:
                            throw std::logic_error("invalid iterator type");
                    }

                    return *this;
                }
                iterator
                operator++(int)
                {
                    iterator tmp = *this;
                    switch (type)
                    {
                        case ORDERED:
                            o_it()++;
                            break;
                        case UNORDERED:
                            uo_it()++;
                            break;
                        case UNORDERED_CI:
                            uoci_it()++;
                            break;
                        case NONE:
                            throw std::logic_error("cannot increment an invalid iterator");
                        default:
                            throw std::logic_error("invalid iterator type");
                    }
                    return tmp;
                }

                bool
                operator==(iterator const& x) const
                {
                    switch (type)
                    {
                        case ORDERED:
                            return o_it() == x.o_it();
                        case UNORDERED:
                            return uo_it() == x.uo_it();
                        case UNORDERED_CI:
                            return uoci_it() == x.uoci_it();
                        case NONE:
                            return x.type == NONE;
                        default:
                            throw std::logic_error("invalid iterator type");
                    }
                }
                bool
                operator!=(iterator const& x) const
                {
                    return !operator==(x);
                }

              private:
                ociter const&
                o_it() const
                {
                    return *it.o;
                }
                ociter&
                o_it()
                {
                    return *it.o;
                }

                uociter const&
                uo_it() const
                {
                    return *it.uo;
                }
                uociter&
                uo_it()
                {
                    return *it.uo;
                }
                uocciiter const&
                uoci_it() const
                {
                    return *it.uoci;
                }
                uocciiter&
                uoci_it()
                {
                    return *it.uoci;
                }

                union
                {
                    ociter* o;
                    uociter* uo;
                    uocciiter* uoci;
                } it;
            };

            class iter : public iterator_base
            {
              private:
                using oiter = ordered_any_map::iterator;
                using uoiter = unordered_any_map::iterator;
                using uociiter = unordered_any_cimap::iterator;

              public:
                using reference = reference;
                using pointer = pointer;

                using iterator = iter;

                iter() = default;
                iter(iter const& it)
                {
                    switch (type)
                    {
                        case ORDERED:
                            this->it.o = new oiter(it.o_it());
                            break;
                        case UNORDERED:
                            this->it.uo = new uoiter(it.uo_it());
                            break;
                        case UNORDERED_CI:
                            this->it.uoci = new uociiter(it.uoci_it());
                            break;
                        case NONE:
                            break;
                        default:
                            throw std::logic_error("invalid iterator type");
                    }
                }
                ~iter()
                {
                    switch (type)
                    {
                        case ORDERED:
                            delete it.o;
                            break;
                        case UNORDERED:
                            delete it.uo;
                            break;
                        case UNORDERED_CI:
                            delete it.uoci;
                            break;
                        case NONE:
                            break;
                    }
                }

                iter(oiter&& it) : iterator_base(ORDERED) { this->it.o = new oiter(std::move(it)); }
                iter(uoiter&& it, iter_type type) : iterator_base(type)
                {
                    switch (type)
                    {
                        case UNORDERED:
                            this->it.uo = new uoiter(std::move(it));
                            break;
                        case UNORDERED_CI:
                            this->it.uoci = new uociiter(std::move(it));
                            break;
                        default:
                            throw std::logic_error("type for unordered_map iterator not supported");
                    }
                }

                reference
                operator*() const
                {
                    switch (type)
                    {
                        case ORDERED:
                            return *o_it();
                        case UNORDERED:
                            return *uo_it();
                        case UNORDERED_CI:
                            return *uoci_it();
                        case NONE:
                            throw std::logic_error("cannot dereference an invalid iterator");
                        default:
                            throw std::logic_error("invalid iterator type");
                    }
                }
                pointer
                operator->() const
                {
                    switch (type)
                    {
                        case ORDERED:
                            return o_it().operator->();
                        case UNORDERED:
                            return uo_it().operator->();
                        case UNORDERED_CI:
                            return uoci_it().operator->();
                        case NONE:
                            throw std::logic_error("cannot dereference an invalid iterator");
                        default:
                            throw std::logic_error("invalid iterator type");
                    }
                }

                iterator&
                operator++()
                {
                    switch (type)
                    {
                        case ORDERED:
                            ++o_it();
                            break;
                        case UNORDERED:
                            ++uo_it();
                            break;
                        case UNORDERED_CI:
                            ++uoci_it();
                            break;
                        case NONE:
                            throw std::logic_error("cannot increment an invalid iterator");
                        default:
                            throw std::logic_error("invalid iterator type");
                    }

                    return *this;
                }
                iterator
                operator++(int)
                {
                    iterator tmp = *this;
                    switch (type)
                    {
                        case ORDERED:
                            o_it()++;
                            break;
                        case UNORDERED:
                            uo_it()++;
                            break;
                        case UNORDERED_CI:
                            uoci_it()++;
                            break;
                        case NONE:
                            throw std::logic_error("cannot increment an invalid iterator");
                        default:
                            throw std::logic_error("invalid iterator type");
                    }
                    return tmp;
                }

                bool
                operator==(iterator const& x) const
                {
                    switch (type)
                    {
                        case ORDERED:
                            return o_it() == x.o_it();
                        case UNORDERED:
                            return uo_it() == x.uo_it();
                        case UNORDERED_CI:
                            return uoci_it() == x.uoci_it();
                        case NONE:
                            return x.type == NONE;
                        default:
                            throw std::logic_error("invalid iterator type");
                    }
                }
                bool
                operator!=(iterator const& x) const
                {
                    return !this->operator==(x);
                }

              private:
                friend class const_iter;

                oiter const&
                o_it() const
                {
                    return *it.o;
                }
                oiter&
                o_it()
                {
                    return *it.o;
                }
                uoiter const&
                uo_it() const
                {
                    return *it.uo;
                }
                uoiter&
                uo_it()
                {
                    return *it.uo;
                }
                uociiter const&
                uoci_it() const
                {
                    return *it.uoci;
                }
                uociiter&
                uoci_it()
                {
                    return *it.uoci;
                }

                union
                {
                    oiter* o;
                    uoiter* uo;
                    uociiter* uoci;
                } it;
            };

            using iterator = iter;
            using const_iterator = const_iter;

            iter
            begin()
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return { o_m().begin() };
                    case map_type::UNORDERED_MAP:
                        return { uo_m().begin(), iter::UNORDERED };
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return { uoci_m().begin(), iter::UNORDERED_CI };
                    default:
                        throw std::logic_error("invalid map type");
                }
            }
            const_iter
            begin() const
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return { o_m().begin() };
                    case map_type::UNORDERED_MAP:
                        return { uo_m().begin(), const_iterator::UNORDERED };
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return { uoci_m().begin(), const_iterator::UNORDERED_CI };
                    default:
                        throw std::logic_error("invalid map type");
                }
            }
            const_iter
            cbegin() const
            {
                return begin();
            }

            iter
            end()
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return { o_m().end() };
                    case map_type::UNORDERED_MAP:
                        return { uo_m().end(), iterator::UNORDERED };
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return { uoci_m().end(), iterator::UNORDERED_CI };
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            const_iter
            end() const
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return { o_m().end() };
                    case map_type::UNORDERED_MAP:
                        return { uo_m().end(), const_iterator::UNORDERED };
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return { uoci_m().end(), const_iterator::UNORDERED_CI };
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            const_iter
            cend() const
            {
                return end();
            }

            bool
            empty() const
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return o_m().empty();
                    case map_type::UNORDERED_MAP:
                        return uo_m().empty();
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return uoci_m().empty();
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            size_type
            size() const
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return o_m().size();
                    case map_type::UNORDERED_MAP:
                        return uo_m().size();
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return uoci_m().size();
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            size_type
            count(key_type const& key) const
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return o_m().count(key);
                    case map_type::UNORDERED_MAP:
                        return uo_m().count(key);
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return uoci_m().count(key);
                    default:
                        throw std::logic_error("invalid map type");
                }
            }
            void
            clear()
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return o_m().clear();
                    case map_type::UNORDERED_MAP:
                        return uo_m().clear();
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return uoci_m().clear();
                    default:
                        throw std::logic_error("invalid map type");
                }
            }
            mapped_type&
            at(key_type const& key)
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return o_m().at(key);
                    case map_type::UNORDERED_MAP:
                        return uo_m().at(key);
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return uoci_m().at(key);
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            mapped_type const&
            at(key_type const& key) const
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return o_m().at(key);
                    case map_type::UNORDERED_MAP:
                        return uo_m().at(key);
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return uoci_m().at(key);
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            mapped_type&
            operator[](key_type const& key)
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return o_m()[key];
                    case map_type::UNORDERED_MAP:
                        return uo_m()[key];
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return uoci_m()[key];
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            mapped_type&
            operator[](key_type&& key)
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return o_m()[std::move(key)];
                    case map_type::UNORDERED_MAP:
                        return uo_m()[std::move(key)];
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return uoci_m()[std::move(key)];
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            size_type
            erase(key_type const& key)
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                        return o_m().erase(key);
                    case map_type::UNORDERED_MAP:
                        return uo_m().erase(key);
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                        return uoci_m().erase(key);
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            std::pair<iterator, bool>
            insert(value_type const& value)
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                    {
                        auto p = o_m().insert(value);
                        return { iterator(std::move(p.first)), p.second };
                    }
                    case map_type::UNORDERED_MAP:
                    {
                        auto p = uo_m().insert(value);
                        return { iterator(std::move(p.first), iterator::UNORDERED), p.second };
                    }
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                    {
                        auto p = uoci_m().insert(value);
                        return { iterator(std::move(p.first), iterator::UNORDERED_CI), p.second };
                    }
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

            template <class... Args>
            std::pair<iterator, bool>
            emplace(Args&&... args)
            {
                switch (type)
                {
                    case map_type::ORDERED_MAP:
                    {
                        return o_m().emplace(std::forward<Args>(args)...);
                    }
                    case map_type::UNORDERED_MAP:
                    {
                        auto p = uo_m().emplace(std::forward<Args>(args)...);
                        return { iterator(std::move(p.first), iterator::UNORDERED), p.second };
                    }
                    case map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS:
                    {
                        auto p = uoci_m().emplace(std::forward<Args>(args)...);
                        return { iterator(std::move(p.first), iterator::UNORDERED_CI), p.second };
                    }
                    default:
                        throw std::logic_error("invalid map type");
                }
            }

          protected:
            friend bool operator==(AnyMap const& v1, AnyMap const& v2);
            map_type type;
        };

        bool
        operator==(AnyMap const& v1, AnyMap const& v2)
        {
            if (v1.type != v2.type)
            {
                return false;
            }
            if (v1.type == new_any::AnyMap::map_type::ORDERED_MAP)
            {
                return *v1.map.o == *v2.map.o;
            }
            else if (v1.type == new_any::AnyMap::map_type::UNORDERED_MAP)
            {
                return *v1.map.uo == *v2.map.uo;
            }
            else if (v1.type == new_any::AnyMap::map_type::UNORDERED_MAP_CASEINSENSITIVE_KEYS)
            {
                return *v1.map.uo == *v2.map.uo;
            }
            else
            {
                throw std::logic_error("invalid map type");
            }
        }
        bool
        operator!=(AnyMap const& v1, AnyMap const& v2)
        {
            return !(v1 == v2);
        }
        std::string anyToJson(Any const& obj, int indent = 0);
        class Any
        {
          public:
            tAnyVariant child;
            template <class T>
            Any(T const& ch)
            {
                child = ch;
            }
            Any(char const* str) { child = std::string(str); }

            template <class T>
            Any(std::vector<T> const& list)
            {
                std::vector<Any> data;
                for (auto& item : list)
                {
                    auto anyObj = tAnyVariant { item };
                    data.push_back(anyObj);
                    child = data;
                }
            }
            template <class T>
            Any(std::list<T> const& list)
            {
                std::vector<Any> data;
                for (auto& item : list)
                {
                    auto anyObj = tAnyVariant { item };
                    data.push_back(anyObj);
                    child = data;
                }
            }

            template <class T>
            Any(std::initializer_list<T> const& list)
            {
                std::vector<Any> data;
                for (auto& item : list)
                {
                    auto anyObj = tAnyVariant { item };
                    data.push_back(anyObj);
                    child = data;
                }
            }

            Any(Any const& other) : child(other.child)
            {
                if (child.index() == 4)
                { // Check if variant is recursive_wrapper<Any>
                    child = std::get<recursive_wrapper<Any>>(other.child);
                }
                else if (child.index() == 5)
                { // Check if variant is vector<Any>
                    auto const& vec = std::get<std::vector<Any>>(other.child);
                    std::vector<Any> newVec;
                    for (auto const& elem : vec)
                    {
                        newVec.push_back(elem); // Deep copy of vector elements
                    }
                    child = newVec;
                }
                else if (child.index() == 6)
                { // Check if variant is AnyMap
                    auto const& map = std::get<AnyMap>(other.child);
                    AnyMap newMap(map);
                    child = newMap;
                }
            }

            template <typename T>
            friend T
            any_cast(Any const& operand)
            {
                // Check if the type T is held by the variant and return it
                if (auto val = std::get_if<T>(&operand.value))
                {
                    return *val;
                }
                throw std::bad_cast(); // Throw if the cast cannot be performed
            }

            std::string
            ToJson()
            {
                return anyToJson(*this);
            }
        };

        bool equalVar(tAnyVariant const& var1, tAnyVariant const& var2);
        bool
        operator==(Any const& a1, Any const& a2)
        {

            if (!equalVar(a1.child, a2.child))
            {
                return false;
            }
            return true;
        }
        bool
        equalVar(tAnyVariant const& var1, tAnyVariant const& var2)
        {
            if (var1.index() != var2.index())
            {
                return false;
            }

            if (var1.index() == 5)
            { // Check if variant is a vector
                auto const& vec1 = std::get<std::vector<Any>>(var1);
                auto const& vec2 = std::get<std::vector<Any>>(var2);

                if (vec1.size() != vec2.size())
                {
                    return false;
                }

                for (size_t i = 0; i < vec1.size(); ++i)
                {
                    if (!(vec1[i] == vec2[i]))
                    {
                        return false;
                    }
                }
                return true;
            }

            return var1 == var2;
        }

        bool
        operator!=(Any const& a1, Any const& a2)
        {
            return !(a1 == a2);
        }
        inline std::string
        anyVariantToJson(tAnyVariant const& node, int indent)
        {
            std::ostringstream ss;
            std::visit(
                [&](auto&& arg)
                {
                    using T = std::decay_t<decltype(arg)>;
                    if constexpr (std::is_same_v<T, int> || std::is_same_v<T, std::string> || std::is_same_v<T, double>
                                  || std::is_same_v<T, bool>)
                    {
                        ss << std::string(indent, ' ') << arg << "\n";
                    }
                    else if constexpr (std::is_same_v<T, AnyMap>)
                    {
                        ss << std::string(indent, ' ') << "{\n";
                        for (auto const& [key, val] : arg)
                        {
                            ss << std::string(indent, ' ') << key << ": \n";
                            ss << anyVariantToJson(val, indent + 2);
                        }
                        ss << std::string(indent, ' ') << "}\n";
                    }
                    else if constexpr (std::is_same_v<T, std::vector<Any>> || std::is_same_v<T, std::list<Any>>)
                    {
                        ss << std::string(indent, ' ') << "[\n";
                        for (auto& v : arg)
                        {
                            ss << anyVariantToJson(v, indent + 2);
                            ss << std::string(indent + 2, ' ') << ",\n";
                        }
                        ss << std::string(indent, ' ') << "]\n";
                    }
                    else
                    { // Node or recursive_wrapper
                        ss << anyVariantToJson(arg.get().child, indent + 2);
                    }
                },
                node);

            return ss.str();
        }

        inline std::string
        anyToJson(Any const& obj, int indent)
        {
            return anyVariantToJson(obj.child);
        }
        inline std::string
        anyMapToJson(AnyMap const& map)
        {
            return anyVariantToJson(tAnyVariant { map });
        }
    } // namespace new_any
} // namespace cppmicroservices