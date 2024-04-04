#include <iostream>
#include <map>
#include <memory>
#include <variant>
#include <vector>
#include <sstream>
namespace cppmicroservices
{
    namespace new_any
    {
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

        class AnyMap
        {
          public:
            std::map<std::string, tAnyVariant> map;
            AnyMap() {}

            AnyMap(std::initializer_list<std::pair<std::string, tAnyVariant>> const& list)
            {
                map.insert(list.begin(), list.end());
            }

            AnyMap(AnyMap const& other)
            {
                for (auto const& [key, value] : other.map)
                {
                    map[key] = value; // Deep copy of tAnyVariant
                }
            }

            tAnyVariant&
            operator[](std::string const& key)
            {
                return map[key];
            }

            tAnyVariant const&
            operator[](std::string const& key) const
            {
                return map.at(key);
            }

            size_t
            erase(std::string const& key)
            {
                return map.erase(key);
            }
        };

        bool
        operator==(AnyMap const& v1, AnyMap const& v2)
        {
            return v1.map == v2.map;
        }
        bool
        operator!=(AnyMap const& v1, AnyMap const& v2)
        {
            return !(v1 == v2);
        }
        
        class Any
        {
        public:
            tAnyVariant child;
            template <class T>
            Any(T ch)
            {
                child = ch;
            }
            Any(char const* str) { child = std::string(str); }

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
                    AnyMap newMap;
                    for (auto const& [key, value] : map.map)
                    {
                        newMap.map[key] = value; // Deep copy of AnyMap values
                    }
                    child = newMap;
                }
            }

            template<typename T>
            friend T any_cast(const Any& operand) {
                // Check if the type T is held by the variant and return it
                if (auto val = std::get_if<T>(&operand.value)) {
                    return *val;
                }
                throw std::bad_cast(); // Throw if the cast cannot be performed
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
                        for (const auto& [key, value] : arg.map)
                        {
                            ss << std::string(indent, ' ') << key << ": \n";
                            ss << anyVariantToJson(value, indent + 2);
                        }
                        ss << std::string(indent, ' ') << "}\n";
                    }
                    else if constexpr (std::is_same_v<T, std::vector<Any>>)
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
        anyToJson(Any const& obj, int indent = 0)
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