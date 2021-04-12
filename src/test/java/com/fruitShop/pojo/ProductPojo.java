package com.fruitShop.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductPojo {

    /*
{
  "name": "string",
  "price": 0
}
     */

    private String name;
    private double price;

}
