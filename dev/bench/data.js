window.BENCHMARK_DATA = {
  "lastUpdate": 1752147951404,
  "repoUrl": "https://github.com/vivekkushwaha39/CppMicroServices",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "monikaphadnis24@gmail.com",
            "name": "Monika Phadnis",
            "username": "Monika032"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbf872d683a5e5361649f71bf86e66a753cc2fc0",
          "message": "Namespace renaming tool (#1050)\n\nFollowing changes are to introduce tool to rename namespace of CppMicroServices codebase.\nTool: change_namespace\nUsage: change_namespace --cppms= --namespace=<new_namespace_word> --namespace-alias (if we want to alias to the original namespace) <output_directory>\n\nThis tool will copy the all the files with namespace \"cppmicroservices\" replaced with the new word provided in the output directory.\n\nSigned-off-by: The MathWorks, Inc. mphadnis@mathworks.com",
          "timestamp": "2025-07-04T12:09:58+05:30",
          "tree_id": "a2497cd61911815e8df9b6d06c9ad9d6d978f540",
          "url": "https://github.com/vivekkushwaha39/CppMicroServices/commit/bbf872d683a5e5361649f71bf86e66a753cc2fc0"
        },
        "date": 1752147945047,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1/manual_time",
            "value": 15072.098688548327,
            "unit": "ns/iter",
            "extra": "iterations: 54596\ncpu: 15454.428895889809 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1/manual_time",
            "value": 59806.320000003194,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60937.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1/manual_time",
            "value": 244316.88983568453,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 247261.10772976262 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1/manual_time",
            "value": 973408.8135592928,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 988700.5649717514 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1/manual_time",
            "value": 3790960.9137057858,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 3886421.3197969543 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1/manual_time",
            "value": 14875140.740740933,
            "unit": "ns/iter",
            "extra": "iterations: 54\ncpu: 15046296.296296297 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/4/manual_time",
            "value": 39042.14884587425,
            "unit": "ns/iter",
            "extra": "iterations: 19322\ncpu: 39624.52127108995 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/4/manual_time",
            "value": 158097.9642313516,
            "unit": "ns/iter",
            "extra": "iterations: 5256\ncpu: 160530.8219178082 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/4/manual_time",
            "value": 611271.1999999922,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609375 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/4/manual_time",
            "value": 2493562.8571428396,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2529761.904761905 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/4/manual_time",
            "value": 10069212.499999693,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 10298295.454545455 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/4/manual_time",
            "value": 38895431.57894736,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 39473684.21052632 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/16/manual_time",
            "value": 126181.17143251892,
            "unit": "ns/iter",
            "extra": "iterations: 7239\ncpu: 127348.3906616936 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/16/manual_time",
            "value": 492113.0984042565,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 498670.21276595746 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/16/manual_time",
            "value": 1981393.1442080482,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2031619.3853427896 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/16/manual_time",
            "value": 8085166.942148825,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8135330.578512397 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/16/manual_time",
            "value": 31601700.000000156,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 33125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/16/manual_time",
            "value": 124993114.28571464,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 127232142.85714285 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/64/manual_time",
            "value": 411194.61907298875,
            "unit": "ns/iter",
            "extra": "iterations: 1877\ncpu: 416222.6957911561 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/64/manual_time",
            "value": 1660057.664233577,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1682253.6496350365 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/64/manual_time",
            "value": 6396204.000000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6406250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/64/manual_time",
            "value": 26159631.250000015,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 26367187.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/64/manual_time",
            "value": 107407111.11111102,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 109375000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/64/manual_time",
            "value": 408533650.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 414062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/256/manual_time",
            "value": 1451104.3175487448,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1479805.0139275766 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/256/manual_time",
            "value": 5227800.999999999,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/256/manual_time",
            "value": 22571205.000000015,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 22656250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/256/manual_time",
            "value": 95333115.38461533,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 97355769.23076923 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/256/manual_time",
            "value": 342468450,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 351562500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/256/manual_time",
            "value": 1499180699.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1531250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1/1000/manual_time",
            "value": 4404371.97802198,
            "unit": "ns/iter",
            "extra": "iterations: 182\ncpu: 4550137.362637362 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/4/1000/manual_time",
            "value": 18321458.62068964,
            "unit": "ns/iter",
            "extra": "iterations: 58\ncpu: 18857758.620689657 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/16/1000/manual_time",
            "value": 68577629.99999997,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 70312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/64/1000/manual_time",
            "value": 284346133.3333332,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 291666666.6666667 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/256/1000/manual_time",
            "value": 1189441500.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1218750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServices/1000/1000/manual_time",
            "value": 5951938600.000005,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6078125000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1/manual_time",
            "value": 14881.830847249368,
            "unit": "ns/iter",
            "extra": "iterations: 53833\ncpu: 15092.972711905337 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1/manual_time",
            "value": 184992.23300971164,
            "unit": "ns/iter",
            "extra": "iterations: 13390\ncpu: 185539.58177744586 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1/manual_time",
            "value": 559815.4231625901,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 565492.7616926504 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1/manual_time",
            "value": 3055557.7981651444,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 3034212.5382263 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1/manual_time",
            "value": 8879636.000000006,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 8906250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1/manual_time",
            "value": 44420972.222222656,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 44704861.11111111 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/4/manual_time",
            "value": 38414.81805548428,
            "unit": "ns/iter",
            "extra": "iterations: 19429\ncpu: 38602.089659786914 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/4/manual_time",
            "value": 318813.99589697167,
            "unit": "ns/iter",
            "extra": "iterations: 4387\ncpu: 320549.35035331664 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/4/manual_time",
            "value": 1646142.505592842,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 1654548.8441461595 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/4/manual_time",
            "value": 4992179.310344837,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 5080049.261083744 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/4/manual_time",
            "value": 25327966.216216166,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 25337837.837837838 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/4/manual_time",
            "value": 63955270.00000002,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 64062500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/16/manual_time",
            "value": 125149.77130977271,
            "unit": "ns/iter",
            "extra": "iterations: 7215\ncpu: 127772.00277200277 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/16/manual_time",
            "value": 589282.7000000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/16/manual_time",
            "value": 3029810.2702702787,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 3040540.5405405406 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/16/manual_time",
            "value": 13851558.620689629,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 14008620.689655172 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/16/manual_time",
            "value": 45912529.99999996,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 46093750 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/16/manual_time",
            "value": 198852357.1428575,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 198660714.2857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/64/manual_time",
            "value": 413165.2197213297,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 418676.3129689175 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/64/manual_time",
            "value": 1923493.2504440476,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1914964.4760213143 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/64/manual_time",
            "value": 7393206.000000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/64/manual_time",
            "value": 31517666.666666683,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 31770833.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/64/manual_time",
            "value": 131705644.44444424,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 131944444.44444445 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/64/manual_time",
            "value": 455459750.0000001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 460937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/256/manual_time",
            "value": 1438868.0303030312,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1444128.7878787878 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/256/manual_time",
            "value": 5084064.000000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5156250 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/256/manual_time",
            "value": 23730285.36585365,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 24009146.341463413 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/256/manual_time",
            "value": 101142046.15384637,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 103365384.61538461 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/256/manual_time",
            "value": 359442699.9999999,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 375000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/256/manual_time",
            "value": 1486599300.0000007,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1500000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1/1000/manual_time",
            "value": 4429496.666666667,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 4513888.888888889 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/4/1000/manual_time",
            "value": 17824695.454545446,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 18229166.666666668 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/16/1000/manual_time",
            "value": 66032370,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 67187500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/64/1000/manual_time",
            "value": 278341666.6666668,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 286458333.3333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/256/1000/manual_time",
            "value": 1184968399.9999993,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 1218750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/RegisterServicesWithRank/1000/1000/manual_time",
            "value": 5985961600.000003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 6093750000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1",
            "value": 1076.0578124997978,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1074.21875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1",
            "value": 1800.9423222695727,
            "unit": "ns/iter",
            "extra": "iterations: 373333\ncpu: 1799.6667854167727 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1",
            "value": 4595.437713030038,
            "unit": "ns/iter",
            "extra": "iterations: 149333\ncpu: 4603.804919207409 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1",
            "value": 16132.803571424452,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 16043.526785714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1",
            "value": 58384.81249999258,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 58593.75 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1",
            "value": 238005.05523943016,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 245857.04720455306 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/4",
            "value": 4324.201875000711,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4296.875 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/4",
            "value": 7173.565848214635,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/4",
            "value": 19878.96813881623,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 19949.509604782077 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/4",
            "value": 64211.09821429485,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 64174.107142857145 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/4",
            "value": 232926.21359219382,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 230164.04419149648 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/4",
            "value": 941793.4404284006,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 941265.0602409638 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/16",
            "value": 17505.01141749143,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 17647.997642841357 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/16",
            "value": 29014.478985535992,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 29157.300988167437 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/16",
            "value": 74673.99999999965,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 73939.73214285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/16",
            "value": 259768.9184060946,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 260910.81593927892 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/16",
            "value": 950537.3493977393,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 941265.0602409638 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/16",
            "value": 3753682.887700684,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 3760026.7379679144 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/64",
            "value": 70221.26785715597,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 71149.55357142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/64",
            "value": 117101.3593750203,
            "unit": "ns/iter",
            "extra": "iterations: 6400\ncpu: 117187.5 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/64",
            "value": 299156.44614082307,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 298187.0229007634 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/64",
            "value": 1036684.6050869918,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1024933.0655957162 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/64",
            "value": 3730678.60962517,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 3760026.7379679144 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/64",
            "value": 15062949.999996817,
            "unit": "ns/iter",
            "extra": "iterations: 50\ncpu: 15312500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/256",
            "value": 307660.7589285629,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 306919.64285714284 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/256",
            "value": 516023.29999991524,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515625 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/256",
            "value": 1335555.82329338,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1317771.0843373493 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/256",
            "value": 4572114.285714597,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 4667207.792207792 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/256",
            "value": 16663707.317076575,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16768292.68292683 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/256",
            "value": 67311044.44444706,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 67708333.33333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1/1000",
            "value": 1236094.6428572105,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1227678.5714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/4/1000",
            "value": 2100594.202898139,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2083333.3333333333 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/16/1000",
            "value": 5453807.142858734,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 5440848.214285715 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/64/1000",
            "value": 18820381.08108129,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 18581081.08108108 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/256/1000",
            "value": 68507181.81817684,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 68181818.18181819 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/FindServices/1000/1000",
            "value": 277164600.00010556,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 281250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1/manual_time",
            "value": 1819.454543090541,
            "unit": "ns/iter",
            "extra": "iterations: 383165\ncpu: 5464.3560868033355 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1/manual_time",
            "value": 7293.325979069477,
            "unit": "ns/iter",
            "extra": "iterations: 96089\ncpu: 27643.642872753386 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1/manual_time",
            "value": 29685.961325557277,
            "unit": "ns/iter",
            "extra": "iterations: 23478\ncpu: 127779.1975466394 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1/manual_time",
            "value": 135441.44710968714,
            "unit": "ns/iter",
            "extra": "iterations: 5086\ncpu: 620576.0912308297 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1/manual_time",
            "value": 781707.4444441086,
            "unit": "ns/iter",
            "extra": "iterations: 900\ncpu: 3038194.4444444445 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1/manual_time",
            "value": 6647509.345794428,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 16939252.3364486 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/4/manual_time",
            "value": 2184.884048352892,
            "unit": "ns/iter",
            "extra": "iterations: 319616\ncpu: 6453.056167400881 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/4/manual_time",
            "value": 8447.499001034219,
            "unit": "ns/iter",
            "extra": "iterations: 82587\ncpu: 41433.57913473065 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/4/manual_time",
            "value": 34897.59395501519,
            "unit": "ns/iter",
            "extra": "iterations: 20116\ncpu: 236130.4434281169 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/4/manual_time",
            "value": 176778.318135699,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 1306041.0334346504 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/4/manual_time",
            "value": 1268912.6811593038,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 7019927.536231884 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/4/manual_time",
            "value": 13333977.35849063,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 40683962.26415094 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/16/manual_time",
            "value": 3785.3724106387403,
            "unit": "ns/iter",
            "extra": "iterations: 185615\ncpu: 10522.452388007434 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/16/manual_time",
            "value": 13193.02876924622,
            "unit": "ns/iter",
            "extra": "iterations: 53147\ncpu: 93196.6997196455 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/16/manual_time",
            "value": 57266.39170201657,
            "unit": "ns/iter",
            "extra": "iterations: 12244\ncpu: 658485.788957857 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/16/manual_time",
            "value": 352568.24596769444,
            "unit": "ns/iter",
            "extra": "iterations: 1984\ncpu: 4032258.064516129 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/16/manual_time",
            "value": 3273396.713615051,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 23107394.366197184 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/16/manual_time",
            "value": 40791000.00000012,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 136948529.4117647 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/64/manual_time",
            "value": 10297.957721769691,
            "unit": "ns/iter",
            "extra": "iterations: 68404\ncpu: 27182.255423659437 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/64/manual_time",
            "value": 32403.19611471287,
            "unit": "ns/iter",
            "extra": "iterations: 21620\ncpu: 301370.2590194265 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/64/manual_time",
            "value": 147494.11640658142,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 2329581.400253058 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/64/manual_time",
            "value": 1033865.7311669431,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 14586410.635155097 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/64/manual_time",
            "value": 11254306.451612957,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 86189516.12903225 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/64/manual_time",
            "value": 153073439.99999982,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 525000000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/256/manual_time",
            "value": 60806.89804396869,
            "unit": "ns/iter",
            "extra": "iterations: 11554\ncpu: 155519.73342565345 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/256/manual_time",
            "value": 203293.98080837703,
            "unit": "ns/iter",
            "extra": "iterations: 3439\ncpu: 1367585.0537947079 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/256/manual_time",
            "value": 864724.3176178646,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 9983715.8808933 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/256/manual_time",
            "value": 5316767.692307686,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 60937500 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/256/manual_time",
            "value": 52105784.61538471,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 355769230.7692308 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/256/manual_time",
            "value": 635825299.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2187500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1/1000/manual_time",
            "value": 288042.5750719875,
            "unit": "ns/iter",
            "extra": "iterations: 2431\ncpu: 732723.1591937474 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/4/1000/manual_time",
            "value": 974255.5555555573,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 5779711.673699016 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/16/1000/manual_time",
            "value": 4228439.393939396,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 40909090.90909091 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/64/1000/manual_time",
            "value": 26329215.384615406,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 248798076.92307693 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/256/1000/manual_time",
            "value": 229260666.66666642,
            "unit": "ns/iter",
            "extra": "iterations: 3\ncpu: 1437500000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/UnregisterServices/1000/1000/manual_time",
            "value": 2603196999.9999943,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8781250000 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1/manual_time",
            "value": 3786.797757367606,
            "unit": "ns/iter",
            "extra": "iterations: 184961\ncpu: 4054.908872681268 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1/manual_time",
            "value": 14900.462742721316,
            "unit": "ns/iter",
            "extra": "iterations: 46246\ncpu: 15541.884703541928 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1/manual_time",
            "value": 60216.607986264484,
            "unit": "ns/iter",
            "extra": "iterations: 11645\ncpu: 60379.99141262344 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1/manual_time",
            "value": 257475.8765778395,
            "unit": "ns/iter",
            "extra": "iterations: 2852\ncpu: 257494.74053295932 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1/manual_time",
            "value": 1130618.1954887235,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1127819.5488721805 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1/manual_time",
            "value": 3986653.142857144,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 3928571.4285714286 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/4/manual_time",
            "value": 3893.9258739294573,
            "unit": "ns/iter",
            "extra": "iterations: 179532\ncpu: 4177.528240090903 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/4/manual_time",
            "value": 15354.226282195837,
            "unit": "ns/iter",
            "extra": "iterations: 45430\ncpu: 15477.107638124588 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/4/manual_time",
            "value": 62905.54775280773,
            "unit": "ns/iter",
            "extra": "iterations: 11392\ncpu: 63092.52106741573 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/4/manual_time",
            "value": 292762.3350659744,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 287385.04598160734 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/4/manual_time",
            "value": 1039001.1834319521,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1040125.7396449704 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/4/manual_time",
            "value": 4007900.5714285737,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 4017857.1428571427 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/16/manual_time",
            "value": 4379.913934787977,
            "unit": "ns/iter",
            "extra": "iterations: 159414\ncpu: 4704.731077571606 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/16/manual_time",
            "value": 17195.287932269825,
            "unit": "ns/iter",
            "extra": "iterations: 40513\ncpu: 17355.540196973812 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/16/manual_time",
            "value": 71944.16475972124,
            "unit": "ns/iter",
            "extra": "iterations: 10051\ncpu: 71510.29748283753 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/16/manual_time",
            "value": 301885.08384819084,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 296502.6478375993 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/16/manual_time",
            "value": 1225865.0000000005,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1239224.1379310344 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/16/manual_time",
            "value": 4625886.842105267,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 4523026.315789473 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/64/manual_time",
            "value": 6314.396985153657,
            "unit": "ns/iter",
            "extra": "iterations: 111183\ncpu: 6605.101499329933 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/64/manual_time",
            "value": 24873.616035893447,
            "unit": "ns/iter",
            "extra": "iterations: 27638\ncpu: 25440.516679933426 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/64/manual_time",
            "value": 100876.69902912612,
            "unit": "ns/iter",
            "extra": "iterations: 7004\ncpu: 100389.06339234723 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/64/manual_time",
            "value": 408740.68002428656,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 407938.67638129933 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/64/manual_time",
            "value": 1689194.1747572804,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 1706614.077669903 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/64/manual_time",
            "value": 6557200.934579436,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 6717289.719626168 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/256/manual_time",
            "value": 30331.235461359593,
            "unit": "ns/iter",
            "extra": "iterations: 23214\ncpu: 30288.83432411476 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/256/manual_time",
            "value": 121332.67292318137,
            "unit": "ns/iter",
            "extra": "iterations: 5754\ncpu: 119482.09940910671 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/256/manual_time",
            "value": 493941.2698412702,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 496031.74603174604 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/256/manual_time",
            "value": 2063103.1976744183,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2043968.0232558139 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/256/manual_time",
            "value": 8868477.215189878,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 8702531.64556962 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/256/manual_time",
            "value": 34122247.61904763,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 34226190.47619048 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1/1000/manual_time",
            "value": 133929.7365362269,
            "unit": "ns/iter",
            "extra": "iterations: 5162\ncpu: 136211.73963580007 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/4/1000/manual_time",
            "value": 552225.1184834124,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 555390.9952606636 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/16/1000/manual_time",
            "value": 2267373.5668789805,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2289012.738853503 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/64/1000/manual_time",
            "value": 9154235.064935062,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 9131493.506493507 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/256/1000/manual_time",
            "value": 37349163.15789473,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 37828947.368421055 ns\nthreads: 1"
          },
          {
            "name": "ServiceRegistryFixture/ModifyServices/1000/1000/manual_time",
            "value": 164547900,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 167968750 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithSvcRef/manual_time",
            "value": 2634.229495055101,
            "unit": "ns/iter",
            "extra": "iterations: 264424\ncpu: 4077.258493933985 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithBundleContext/manual_time",
            "value": 3508.9594034140173,
            "unit": "ns/iter",
            "extra": "iterations: 198194\ncpu: 5124.398316800711 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/OpenServiceTrackerWithInterfaceName/manual_time",
            "value": 3714.302639343524,
            "unit": "ns/iter",
            "extra": "iterations: 191601\ncpu: 5382.278798127359 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000",
            "value": 3633.802231200532,
            "unit": "ns/iter",
            "extra": "iterations: 194783\ncpu: 3609.7862749829296 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1024",
            "value": 3632.0752998651888,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3599.3239297786968 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/2048",
            "value": 3650.031339229503,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/4096",
            "value": 3699.066787381599,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3683.029137447969 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/8192",
            "value": 3723.186744309523,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/16384",
            "value": 3728.833698510959,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3766.734345117241 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/32768",
            "value": 3826.719238001198,
            "unit": "ns/iter",
            "extra": "iterations: 186667\ncpu: 3850.439552786513 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/65536",
            "value": 3897.8840216360013,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3899.267590593588 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/131072",
            "value": 4008.854493116682,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 3989.9482322352997 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/262144",
            "value": 4096.4696938040415,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4080.628873877011 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/524288",
            "value": 4172.565406133199,
            "unit": "ns/iter",
            "extra": "iterations: 172308\ncpu: 4171.309515518722 ns\nthreads: 1"
          },
          {
            "name": "CloseServiceTracker/1000000",
            "value": 4480.422441304555,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4450.327867791278 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/1",
            "value": 17515.442564991077,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 17578.046526578008 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/4000",
            "value": 10165440.624998467,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 10253906.25 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalability/10000",
            "value": 25072020.83333482,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 24739583.333333332 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/1",
            "value": 17504.52455356972,
            "unit": "ns/iter",
            "extra": "iterations: 44800\ncpu: 17787.38839285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/4000",
            "value": 68123154.54546727,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 68181818.18181819 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/MultipleImplOneInterfaceServiceTrackerScalability/10000",
            "value": 170788350.00000936,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 171875000 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/1",
            "value": 15685.308928571625,
            "unit": "ns/iter",
            "extra": "iterations: 56000\ncpu: 15904.017857142857 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/4000",
            "value": 2389978.928571119,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2399553.5714285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceTrackerFixture/ServiceTrackerScalabilityWithLDAPFilter/10000",
            "value": 6399456.250000363,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 6417410.714285715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/1",
            "value": 343.4068761773276,
            "unit": "ns/iter",
            "extra": "iterations: 2036364\ncpu: 345.28453655633274 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/3",
            "value": 960.7273389611674,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/7",
            "value": 2176.9974999998,
            "unit": "ns/iter",
            "extra": "iterations: 320000\ncpu: 2148.4375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/11",
            "value": 3431.9791196060705,
            "unit": "ns/iter",
            "extra": "iterations: 203636\ncpu: 3452.852147950264 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/15",
            "value": 4648.857155804062,
            "unit": "ns/iter",
            "extra": "iterations: 154483\ncpu: 4652.615498145427 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/18",
            "value": 5557.782999999289,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5468.75 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath/20",
            "value": 6169.110714284086,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6138.392857142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/1",
            "value": 4485.602500000141,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 4589.84375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/3",
            "value": 6341.8999999994085,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6417.410714285715 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/7",
            "value": 9810.870933611397,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 9835.335556537693 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/11",
            "value": 13499.586162560438,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 13497.428582908113 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/15",
            "value": 16948.604120120162,
            "unit": "ns/iter",
            "extra": "iterations: 40727\ncpu: 16880.69339750043 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/18",
            "value": 19644.24583599204,
            "unit": "ns/iter",
            "extra": "iterations: 34462\ncpu: 19496.11165921885 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath/20",
            "value": 21417.62187499552,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 21484.375 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/1",
            "value": 474.05977603882275,
            "unit": "ns/iter",
            "extra": "iterations: 1445161\ncpu: 475.7255419984348 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/3",
            "value": 1294.423571428232,
            "unit": "ns/iter",
            "extra": "iterations: 560000\ncpu: 1311.3839285714287 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/7",
            "value": 2883.510319861417,
            "unit": "ns/iter",
            "extra": "iterations: 248889\ncpu: 2825.054542386365 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/11",
            "value": 5159.668000001147,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5156.25 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/15",
            "value": 6774.7176339289745,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 6626.674107142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/18",
            "value": 8268.730496738628,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8161.235887339789 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/HappyPath_NoThrowOverload/20",
            "value": 8800.819639198098,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8789.023263289004 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/1",
            "value": 309.6412499999701,
            "unit": "ns/iter",
            "extra": "iterations: 2240000\ncpu: 313.8950892857143 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/3",
            "value": 1118.2156250001185,
            "unit": "ns/iter",
            "extra": "iterations: 640000\ncpu: 1123.046875 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/7",
            "value": 2718.588466544432,
            "unit": "ns/iter",
            "extra": "iterations: 263529\ncpu: 2727.4038151398895 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/11",
            "value": 4954.172999998718,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5000 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/15",
            "value": 6576.450892857062,
            "unit": "ns/iter",
            "extra": "iterations: 112000\ncpu: 6696.428571428572 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/18",
            "value": 7856.768973214048,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7847.377232142857 ns\nthreads: 1"
          },
          {
            "name": "AnyMapPerfTestFixture/ErrorPath_NoThrowOverload/20",
            "value": 8630.027990946082,
            "unit": "ns/iter",
            "extra": "iterations: 74667\ncpu: 8579.760804639265 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/BundleInstallCppFramework/manual_time",
            "value": 213655.56232855906,
            "unit": "ns/iter",
            "extra": "iterations: 3281\ncpu: 228588.84486437062 ns\nthreads: 1"
          },
          {
            "name": "BundleInstallFixture/LargeBundleInstallCppFramework/manual_time",
            "value": 210759.00060204646,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 235174.59361830223 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterFromString",
            "value": 413.3850110200375,
            "unit": "ns/iter",
            "extra": "iterations: 1659259\ncpu: 404.92472844806025 ns\nthreads: 1"
          },
          {
            "name": "ConstructNonTrivialFilterFromString",
            "value": 613.3824107142314,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 627.7901785714286 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Simple",
            "value": 280.55405443955874,
            "unit": "ns/iter",
            "extra": "iterations: 2488889\ncpu: 276.2276662398363 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithAnyMap/Complex",
            "value": 312.2320535714453,
            "unit": "ns/iter",
            "extra": "iterations: 2240000\ncpu: 306.91964285714283 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Simple",
            "value": 173.0229156042208,
            "unit": "ns/iter",
            "extra": "iterations: 4072727\ncpu: 172.64231066801187 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithBundle/Complex",
            "value": 284.54201854718286,
            "unit": "ns/iter",
            "extra": "iterations: 2488889\ncpu: 282.5055677452872 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Simple",
            "value": 119.47666071429401,
            "unit": "ns/iter",
            "extra": "iterations: 5600000\ncpu: 119.97767857142857 ns\nthreads: 1"
          },
          {
            "name": "MatchFilterWithServiceReference/Complex",
            "value": 162.9500577868157,
            "unit": "ns/iter",
            "extra": "iterations: 4072727\ncpu: 161.13282329014442 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterIncremental",
            "value": 1576.5714285710228,
            "unit": "ns/iter",
            "extra": "iterations: 448000\ncpu: 1604.3526785714287 ns\nthreads: 1"
          },
          {
            "name": "ConstructFilterNotOperator",
            "value": 691.0533482142561,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 680.1060267857143 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByInterface",
            "value": 810.8199776784326,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 819.6149553571429 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetServiceReferenceByClassName",
            "value": 710.8416294642998,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 714.9832589285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterface",
            "value": 713.4015624998824,
            "unit": "ns/iter",
            "extra": "iterations: 896000\ncpu: 714.9832589285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassName",
            "value": 539.5057000000634,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByClassNameAndLDAPFilter",
            "value": 553.0231249999978,
            "unit": "ns/iter",
            "extra": "iterations: 1120000\ncpu: 544.0848214285714 ns\nthreads: 1"
          },
          {
            "name": "ServiceFixture/GetAllServiceReferencesByInterfaceAndLDAPFilter",
            "value": 526.1058999999477,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 531.25 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/1",
            "value": 119.55985180540665,
            "unit": "ns/iter",
            "extra": "iterations: 4977778\ncpu: 116.14117785084028 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/8",
            "value": 963.548676987267,
            "unit": "ns/iter",
            "extra": "iterations: 746667\ncpu: 962.6111774057243 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/64",
            "value": 7614.133928571322,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7672.991071428572 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/512",
            "value": 62333.491071423654,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 62779.017857142855 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/4096",
            "value": 486777.60000009584,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500000 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CreateBundleTracker/10000",
            "value": 1188410.71428538,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1171875 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/OpenBundleTracker/manual_time",
            "value": 1528.2050505495472,
            "unit": "ns/iter",
            "extra": "iterations: 462286\ncpu: 2129.3636406899623 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerGetObject/manual_time",
            "value": 85.2022710466726,
            "unit": "ns/iter",
            "extra": "iterations: 8115867\ncpu: 121.29018378443116 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerRemoveMethod/manual_time",
            "value": 161.38636620470277,
            "unit": "ns/iter",
            "extra": "iterations: 4367706\ncpu: 12946.584545754682 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTracker/manual_time",
            "value": 409.78870786303105,
            "unit": "ns/iter",
            "extra": "iterations: 1716202\ncpu: 1611.479884069591 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/1/manual_time",
            "value": 408.87948568431165,
            "unit": "ns/iter",
            "extra": "iterations: 1710054\ncpu: 1626.4106279684736 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/128/manual_time",
            "value": 413.0170069546865,
            "unit": "ns/iter",
            "extra": "iterations: 1710301\ncpu: 1626.175743334068 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/16384/manual_time",
            "value": 415.27326838862405,
            "unit": "ns/iter",
            "extra": "iterations: 1692146\ncpu: 1680.5582969791024 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/CloseBundleTrackerWithListeners/500000/manual_time",
            "value": 417.57263853750277,
            "unit": "ns/iter",
            "extra": "iterations: 1675144\ncpu: 1884.1663761443792 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/StartBundle/manual_time",
            "value": 7479.396673185858,
            "unit": "ns/iter",
            "extra": "iterations: 95106\ncpu: 11664.616322839778 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/0/manual_time",
            "value": 7007.818653816341,
            "unit": "ns/iter",
            "extra": "iterations: 101309\ncpu: 11104.640259009564 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/1/manual_time",
            "value": 8765.391718866764,
            "unit": "ns/iter",
            "extra": "iterations: 80134\ncpu: 14038.98470062645 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/4/manual_time",
            "value": 9792.433571865044,
            "unit": "ns/iter",
            "extra": "iterations: 72108\ncpu: 16251.66417041105 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/16/manual_time",
            "value": 17339.368754329604,
            "unit": "ns/iter",
            "extra": "iterations: 40428\ncpu: 28986.717126743843 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/64/manual_time",
            "value": 43461.03042444176,
            "unit": "ns/iter",
            "extra": "iterations: 15974\ncpu: 74339.5517716289 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/256/manual_time",
            "value": 161334.32768361608,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 282485.8757062147 ns\nthreads: 1"
          },
          {
            "name": "BundleTrackerFixture/BundleTrackerScalability/1000/manual_time",
            "value": 674290.4716073168,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 1203079.884504331 ns\nthreads: 1"
          },
          {
            "name": "GetDSServiceFixture/GetService",
            "value": 7212.537946428604,
            "unit": "ns/iter",
            "extra": "iterations: 89600\ncpu: 7149.832589285715 ns\nthreads: 1"
          },
          {
            "name": "GetConfigurationTest/createConfiguration",
            "value": 39155.508457553966,
            "unit": "ns/iter",
            "extra": "iterations: 49778\ncpu: 10044.598015187432 ns\nthreads: 1"
          },
          {
            "name": "GetConfigurationTest/updateConfigurationUsedByService",
            "value": 53338.66363931257,
            "unit": "ns/iter",
            "extra": "iterations: 95573\ncpu: 8664.842581063689 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}