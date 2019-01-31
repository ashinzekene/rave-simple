declare module 'rave-simple' {  
  type PaymentOption = 'card'| 'account'| 'ussd'| 'qr'| 'mpesa'| 'mobilemoneyghana';
  
  interface InitOptions {
    /**
     * Timeout before throwing load error
     * **Default: 10000**
     */
    timeout: number
  }
  
  interface RaveInstance {
    /**
     * use this to close the modal immediately after payment.
     */
    close: () => void
  }
  
  export interface RaveOptions {
    /**
     * 	**REQUIRED**	Your merchant public key, see how to get your API Keys
     */
    PBFPubKey: string
    /**
     * 	This is a sha256 hash of your getpaidSetup values, it is used for passing secured values to the payment gateway.
     */
    integrity_hash: string
    /**
     * 	**REQUIRED**	Your Unique transaction reference.
     */
    txref: string
    /**
     * 	This allows you to select the payment option you want for your users, 
     *  see [Choose Payment](https://developer.flutterwave.com/docs/splitting-payment-methods)
     *  Methods for more info.
     */
    payment_options: PaymentOption | PaymentOption[]
    /**
     * 	This is the payment plan ID used for
     * [Recurring billing](https://developer.flutterwave.com/docs/recurring-billing).
     */
    payment_plan: string
    /**
     * 	This is an array of objects containing the subaccount IDs to split the payment into.
     */
    subaccounts: any[]
    /**
     * 	**REQUIRED**	Amount to charge.
     */
    amount: number
    /**
     * 	The is the currency to charge the customer's payment source in,
     *  it defaults to NGN if nothing is passed.
     */
    currency: string
    /**
     * 	defaults to NG route country.
     */
    country: string
    /**
     * 	**REQUIRED**	Email of the customer.
     */
    customer_email: string
    /**
     * 	**REQUIRED**	phone number of the customer.
     */
    customer_phone: string
    /**
     * 	first name of the customer.
     */
    customer_firstname: string
    /**
     * 	last name of the customer.
     */
    customer_lastname: string
    /**
     * 	Text to be displayed on the Rave Checkout Button.
     */
    pay_button_text: string
    /**
     * 	Text to be displayed as the title of the payment modal.
     */
    custom_title: string
    /**
     * 	Text to be displayed as a short modal description.
     */
    custom_description: string
    /**
     * 	URL to redirect to when a transaction is completed.
     *  This is useful for 3DSecure payments so we can redirect your customer
     *  back to a custom page you want to show them.
     */
    redirect_url: string
    /**
     * 	Link to the Logo image.
     */
    custom_logo: string
    /**
     * : function()	false	A function to be called when the pay modal is closed.
     */
    onclose: Function
    /**
     * : function(b)	false	A function to be called on successful card charge. User’s can always be redirected to a successful or failed page supplied by the merchant here based on response.
     */
    callback: (response: any) => void
    /**
     * 	false	Any other custom data you wish to pass.
     */
    metadata: any
  }
  
  interface PaymentInstance {
    /**
     * imports rave's payment script
     */
    init(options?: InitOptions): Promise<void>
    /**
     * Adds rave's payment options
     */
    addOptions(options: Partial<RaveOptions>): void
    /**
     * Performs payment
     */
    pay(): Promise<RaveInstance>
    /**
    * use this to close the modal immediately after payment.
    */
    close: () => void
  }
  
  const Rave: (options ?: { test: boolean }) => PaymentInstance
  
  export const setGlobalConfig: (options: Partial<RaveOptions>) => void
  export default Rave
}
