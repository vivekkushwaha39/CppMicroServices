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
    lhs.map["int"] = 1;
    lhs.map["float"] = 2.5;
    lhs.map["string"] = std::string("string");
    lhs.map["bool"] = true;
    new_any::AnyMap submap;
    submap.map["a"] = std::string("a");
    submap.map["b"] = std::string("b");
    lhs.map["submap"] = submap;

    new_any::AnyMap rhs = lhs; // make a copy of lhs
    EXPECT_EQ(lhs, rhs);       // they should be equal

    rhs.map["int"] = 2;
    EXPECT_NE(lhs, rhs); // they should not be equal after modifying the rhs.
    rhs.map["int"] = 1;
    EXPECT_EQ(lhs, rhs); // now they should be equal again
    rhs.map.erase("int");
    EXPECT_NE(lhs,
              rhs); // and finally, with the "int" element erased, they should not be equal
                    // anymore.
}
