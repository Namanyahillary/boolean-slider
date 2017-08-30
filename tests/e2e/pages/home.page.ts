class HomePage {
    public get radioButton() { return browser.element(".mx-name-radioButtons6 label"); }
    public get switch1() { return browser.element(".mx-name-switch1"); }
    public get switch2() { return browser.element(".mx-name-switch2"); }
    public get switch3() { return browser.element(".mx-name-switch3"); }
    public get popup() { return browser.element("#mxui_widget_Window_0"); }
    public get switchValue() {
        return browser.element(".widget-switch-btn-wrapper");
    }

    public open(): void {
        browser.url("/");
    }
}
const page = new HomePage();
export default page;
