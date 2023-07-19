import { AnalyticsModule } from '@liff/analytics';
export default AnalyticsModule;
declare module '@liff/core' {
    interface LiffCore {
        analytics: ReturnType<typeof AnalyticsModule.prototype.install>;
    }
}
