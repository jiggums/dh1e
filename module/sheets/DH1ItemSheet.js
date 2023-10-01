export default class DH1ItemSheet extends ItemSheet {
    get template() {
        return `systems/dh1e/templates/sheets/${this.item.type}-sheet.html`;
    }

    getData() {
        const baseData = super.getData();
        let sheetData = {
          owner: this.item.isOwner,
          editable: this.isEditable,
          item: baseData.item,
          data: baseData.item.data.data,
          config: CONFIG.dh1e
        };

        return sheetData;
      }
}