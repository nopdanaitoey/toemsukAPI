export interface LazadaProduct {
    data:       Data;
    code:       string;
    request_id: string;
}

export interface Data {
    total_products: number;
    products:       Product[];
}

export interface Product {
    created_time:     string;
    updated_time:     string;
    images:           string[];
    skus:             Skus[];
    item_id:          number;
    trialProduct:     boolean;
    primary_category: number;
    marketImages:     any[];
    attributes:       Attributes;
    status:           string;
}

export interface Attributes {
    name:                 string;
    description:          string;
    organic?:             string;
    packaging_type?:      string;
    pack_type?:           string;
    brand:                string;
    Hazmat:               string;
    source:               string;
    delivery_option_sof?: string;
    dietary_needs?:       string;
    storage_type_gr?:     string;
    chocolate_type?:      string;
    video?:               string;
    warranty_type?:       string;
    flavor?:              string;
}

export interface Skus {
    Status:                    Status;
    quantity:                  number;
    Images:                    string[];
    SellerSku:                 string;
    ShopSku:                   string;
    saleProp:                  SaleProp;
    Url:                       string;
    flavor?:                   string;
    multiWarehouseInventories: MultiWarehouseInventory[];
    package_width:             string;
    package_height:            string;
    fblWarehouseInventories:   any[];
    special_price:             number;
    price:                     number;
    channelInventories:        any[];
    package_length:            string;
    package_weight:            string;
    SkuId:                     number;
    "5ชิ้น"?:                  string;
    ขนาด?:                     string;
    Variation3?:               string;
}

export enum Status {
    Active = "active",
}

export interface MultiWarehouseInventory {
    occupyQuantity:   number;
    quantity:         number;
    totalQuantity:    number;
    withholdQuantity: number;
    warehouseCode:    WarehouseCode;
    sellableQuantity: number;
}

export enum WarehouseCode {
    Dropshipping = "dropshipping",
}

export interface SaleProp {
    flavor?:     string;
    "5ชิ้น"?:    string;
    ขนาด?:       string;
    Variation3?: string;
}
