<template>
  <v-container fluid grid-list-md>
    <vue-json-pretty
      :path="'res'"
      :data="data"
      @click="handleClick">
    </vue-json-pretty>
  </v-container>
</template>
<script>
import axios from "axios";
import VueJsonPretty from 'vue-json-pretty'
export default {
  components: {
    VueJsonPretty
  },
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      data: "",
      change: {
        Language: "VI",
        HCode: "LHQN",
        Currency: "USD",
        data: {
          Special_Detail: [
            {
              Code: "111",
              Min_Price: 0,
              Rooms: [
                {
                  Code: "STSK",
                  Prices: [
                    {
                      Price_Date: "2020-06-28",
                      Price_Per_Night: "1750000"
                    },
                    {
                      Price_Date: "2020-06-29",
                      Price_Per_Night: "1550000"
                    }
                  ],
                  Service: [
                    {
                      Code: "44",
                      Name: "Phụ thu thêm người",
                      TypeService: [
                        {
                          Price: "250000",
                          Qty: "2",
                          Type: "Children6_11"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              Code: "111",
              Min_Price: 0,
              Rooms: [
                {
                  Code: "STST",
                  Prices: [
                    {
                      Price_Date: "2020-06-28",
                      Price_Per_Night: "1750000"
                    },
                    {
                      Price_Date: "2020-06-29",
                      Price_Per_Night: "1550000"
                    }
                  ],
                  Service: [
                    {
                      Code: "44",
                      Name: "Phụ thu thêm người",
                      TypeService: [
                        {
                          Price: "250000",
                          Qty: "2",
                          Type: "Children6_11"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          Service_Detail: []
        }
      }
    };
  },
  created() {
    let config = {
      headers: {
        Authorization: "c21sOnNzZA==",
        
      }
    };
    axios
      .post("https://kpi-smile.flc.vn:50929/api/v1.0/flc/changelangcurrent", this.change, config,{ withCredentials: true })
      .then(resp => {
        this.data = resp.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>