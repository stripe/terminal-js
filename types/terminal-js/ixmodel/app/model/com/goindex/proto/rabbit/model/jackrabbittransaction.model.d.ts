import { rabbit_model_rabbitbasket } from './rabbitbasket.model';
export declare namespace rabbit_model_jackrabbittransaction {
    interface Cart {
        line_items?: rabbit_model_rabbitbasket.LineItem[];
        modifiers?: rabbit_model_rabbitbasket.Modifier[];
        discounts?: rabbit_model_rabbitbasket.Discount[];
        tenders?: rabbit_model_rabbitbasket.Tender[];
        currency?: string;
        tax?: number;
        total?: number;
    }
}
