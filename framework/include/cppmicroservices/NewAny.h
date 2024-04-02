#include <iostream>
#include <map>
#include <memory>
#include <variant>
#include <vector>

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

            recursive_wrapper& operator=(recursive_wrapper&&) noexcept = default;

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
        using tAnyVariant = std::variant<int, std::string, recursive_wrapper<Any>, std::vector<Any>, AnyMap, double>;
        inline void anyVariantToJson(tAnyVariant const& node, int indent = 0);

        class AnyMap
        {
          public:
            std::map<std::string, tAnyVariant> map;
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
        struct Any
        {

            tAnyVariant child;
            Any(tAnyVariant ch) : child(ch) {}

            Any(std::initializer_list<Any> const& list) : child { std::vector<Any>(list) } {}
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

            if (var1.index() == 2)
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
        inline void
        anyVariantToJson(tAnyVariant const& node, int indent)
        {
            std::visit(
                [&](auto&& arg)
                {
                    using T = std::decay_t<decltype(arg)>;
                    if constexpr (std::is_same_v<T, int> || std::is_same_v<T, std::string> || std::is_same_v<T, double>)
                    {
                        std::cout << std::string(indent, ' ') << arg << "\n";
                    }
                    else if constexpr (std::is_same_v<T, AnyMap>)
                    {
                        std::cout << std::string(indent, ' ') << "{\n";
                        for (const auto& [key, value] : arg.map)
                        {
                            std::cout << std::string(indent, ' ') << key << ": \n";
                            anyVariantToJson(value, indent + 2);
                        }
                        std::cout << std::string(indent, ' ') << "}\n";
                    }
                    else if constexpr (std::is_same_v<T, std::vector<Any>>)
                    {
                        std::cout << std::string(indent, ' ') << "[\n";
                        for (auto& v : arg)
                        {
                            anyVariantToJson(v, indent + 2);
                            std::cout << std::string(indent + 2, ' ') << ",\n";
                        }
                        std::cout << std::string(indent, ' ') << "]\n";
                    }
                    else
                    { // Node or recursive_wrapper
                        anyVariantToJson(arg.get().child, indent + 2);
                    }
                },
                node);
        }

        inline void
        anyToJson(Any const& obj, int indent = 0)
        {
            anyVariantToJson(obj.child);
        }
        inline void
        anyMapToJson(AnyMap const& map)
        {
            anyVariantToJson(tAnyVariant { map });
        }
    } // namespace new_any
} // namespace cppmicroservices