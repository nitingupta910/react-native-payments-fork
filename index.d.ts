declare module 'react-native-payments-fork' {

    type AllowedCardNetworks = Array<string>;
    type AllowedCardAuthMethods = Array<string>;
    type PaymentRequestData = any; // FIXME

    interface IGooglePay {
        ENVIRONMENT_TEST: number;

        setEnvironment(env: number): void;

        isReadyToPay(allowedCardNetworks: AllowedCardNetworks, allowedCardAuthMethods: AllowedCardAuthMethods): Promise<boolean>;

        requestPayment(paymentData: PaymentRequestData): Promise<string>
    }

    export const GooglePay: IGooglePay;
}
