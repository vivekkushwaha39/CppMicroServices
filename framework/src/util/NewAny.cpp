#include <cppmicroservices/NewAny.h>
namespace cppmicroservices
{
    namespace new_any
    {
        namespace detail
        {
            Any
            AtCompoundKey(std::vector<Any> v, std::string_view const& key)
            {
                auto pos = key.find(".");
                if (pos != AnyMap::key_type::npos)
                {
                    auto head = key.substr(0, pos);
                    auto tail = key.substr(pos + 1);

                    int const index = std::stoi(std::string(head));
                    auto& h = v.at(index < 0 ? v.size() + index : index);
                    if (auto held = std::get_if<AnyMap>(&h.child))
                    {
                        return held->AtCompoundKey(std::string(tail));
                    }
                    else if (auto held = std::get_if<std::vector<Any>>(&h.child))
                    {
                        return AtCompoundKey(*held, tail);
                    }
                    throw std::invalid_argument("Unsupported Any type at '" + std::string(head) + "' for dotted get");
                }
                else
                {
                    int const index = std::stoi(std::string(key));
                    return v.at(index < 0 ? v.size() + index : index);
                }
            }
        } // namespace detail

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
        Any
        AnyMap::AtCompoundKey(key_type const& key)
        {
            auto pos = key.find(".");
            if (pos != AnyMap::key_type::npos)
            {
                auto head = key.substr(0, pos);
                auto tail = key.substr(pos + 1);
                auto& h = at(std::string(head));
                if (auto val = std::get_if<AnyMap>(&h))
                {
                    return val->AtCompoundKey(tail);
                }
                else if (auto val = std::get_if<std::vector<Any>>(&h))
                {
                    return detail::AtCompoundKey(*val, tail);
                }
            }
            return Any { std::move(at(key)) };
        }
    } // namespace new_any
} // namespace cppmicroservices