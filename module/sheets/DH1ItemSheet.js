export default class DH1ItemSheet extends ItemSheet {
    get template() {
        return `systems/dh1e/templates/sheets/${this.item.type}-sheet.html`;
    }

    getData() {
        // Retrieve base data structure.
        const context = super.getData();
    
        // Use a safe clone of the item data for further operations.
        const itemData = context.item;
    
        // Add the actor's data to context.data for easier access, as well as flags.
        context.system = itemData.system;
        context.flags = itemData.flags;
    
        return context;
      }
}