export declare namespace rabbit_model_rabbitbasket {
    /**
     * The item discount must apply to the item that is in the basket.
     */
    interface Discount {
        description: string;
        amount: number;
    }
    /**
     * The item modifier must apply to the item that is in the basket.
     */
    interface Modifier {
        description: string;
        amount: number;
    }
    interface LineItem {
        description?: string;
        quantity?: number;
        amount: number;
        discounts?: Discount[];
        modifiers?: Modifier[];
    }
    namespace LineItem { }
    interface Tender {
        description: string;
        charge_amount: number;
    }
}
