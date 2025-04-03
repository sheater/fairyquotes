import { quotes } from "./quotes";

describe("quotes", () => {
  it("all quote dialogs should have some items", () => {
    const dialogs = Object.values(quotes);
    const lengths = dialogs.map((dialog) => dialog.items.length);

    expect(lengths).not.toContain(0);
  });
});
