package com.fruitShop.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductPojo {

    /*
    {
  "name": "Wildberries",
  "price": 4.99,
  "category_url": "/shop/categories/Fruits",
  "vendor_url": "/shop/vendors/672"
}
     */

    private String name;
    private double price;
    private String category_url;
    private String vendor_url;

}
