interface Response {
    featureToken: string;
    features?: string[] | null;
}
export declare function fetchFeatureTokenAndFeatures(liffId: string): Promise<Response>;
export {};
