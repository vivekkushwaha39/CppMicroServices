/*=============================================================================

Library: CppMicroServices

Copyright (c) The CppMicroServices developers. See the COPYRIGHT
file at the top-level directory of this distribution and at
https://github.com/CppMicroServices/CppMicroServices/COPYRIGHT .

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

=============================================================================*/

#include "cppmicroservices/NewAny.h"

#include "gtest/gtest.h"

using namespace cppmicroservices;

TEST(NewAnyTest, AnyEquality)
{
    EXPECT_EQ(new_any::Any(std::string("A")), new_any::Any(std::string("A")));
    EXPECT_NE(new_any::Any(std::string("A")), new_any::Any(std::string("B")));
    EXPECT_NE(new_any::Any(1), new_any::Any(std::string("A")));
    EXPECT_EQ(new_any::Any(1), new_any::Any(1));
    EXPECT_NE(new_any::Any(1), new_any::Any(2));
    EXPECT_EQ(new_any::Any(true), new_any::Any(true));
    EXPECT_NE(new_any::Any(true), new_any::Any(false));
    EXPECT_NE(new_any::Any(1), new_any::Any(true)); // type mismatch should never be equal
    EXPECT_NE(new_any::Any(0), new_any::Any(false));
    EXPECT_EQ(new_any::Any(1.5), new_any::Any(1.5));
    EXPECT_NE(new_any::Any(1.5), new_any::Any(1.6));

    new_any::AnyMap lhs;
    lhs["int"] = 1;
    lhs["float"] = 2.5;
    lhs["string"] = std::string("string");
    lhs["bool"] = true;
    new_any::AnyMap submap;
    submap["a"] = std::string("a");
    submap["b"] = std::string("b");
    lhs["submap"] = submap;

    new_any::AnyMap rhs = lhs; // make a copy of lhs
    EXPECT_EQ(lhs, rhs);       // they should be equal

    rhs["int"] = 2;
    EXPECT_NE(lhs, rhs); // they should not be equal after modifying the rhs.
    rhs["int"] = 1;
    EXPECT_EQ(lhs, rhs); // now they should be equal again
    rhs.erase("int");
    EXPECT_NE(lhs,
              rhs); // and finally, with the "int" element erased, they should not be equal
                    // anymore.

    new_any::Any a { 1, 2, 3, 4 };
    new_any::Any x("a");

    new_any::AnyMap m2 {
        {"hi", 1}
    };

    new_any::AnyMap m {
        {  "hi",                  2},
        {"lost",                  3},
        {  "as", new_any::Any("ab")}
    };

    new_any::AnyMap m3;
    m3["a"] = m;
    new_any::Any ss { m2 };

    std::cout << new_any::anyMapToJson(m);

    std::cout << "==========================================\n";

    std::cout << new_any::anyToJson(ss);
}
TEST(NewAnyTest, AnyList)
{

    std::list<int> a { 1, 2, 3, 4 };
    new_any::Any aa(a);
    std::map<std::string, int> strIntMap {
        {"a", 1},
        {"b", 2}
    };
    new_any::AnyMap map1 {
        {"abcd", aa}
    };
    new_any::AnyMap map2(strIntMap);

    std::cout << "--------------------------------\n" << aa.ToJson() << "\n";

    std::cout << "--------------------------------\n" << map2.ToJson() << "\n";

    std::cout << "--------------------------------\n" << map1.ToJson() << "\n";
}