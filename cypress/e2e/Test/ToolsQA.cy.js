import { selectMenus } from '../../support/pages/dom-dropdown'

describe('ToolsQA | Widgets  | Dropdown Select-Menu', function () {

    beforeEach('User is on select-menu page', () => {
        
        cy.SelectMenuPage()
        cy.fixture('fxt-dropdown').then( fxt => { this.fxt = fxt })

    })

    it('TC1: Validate do click on dropdown Select Value and select the Group 2 - Option 2.', () => {
       
        selectMenus.clickSelectValue()
        selectMenus.clickGroup2Option2()

    })
    it('TC2: Validate do click on dropdown Select One and select Ms.', () => {
        
        selectMenus.clickSelectOne()
        selectMenus.clickMs()
        
    })
    it('1TC3: Validate do click on dropdown Old Style Select Menu and select Black color.', () => {

        selectMenus.selectOldStyleSelectMenu(this.fxt.color)

    })
    it('TC4: Validate do click on dropdown Multiselect and select Green, Blue, Black and Red colors.', () => {

        selectMenus.clickMultiselectDropdown()
        selectMenus.clickAllColors()
        cy.contains(this.fxt.noOptions)

    })
    it('TC5: Validate selecy Audi in standard multiselect.', () => {

        selectMenus.selectStandardMultiSelect(this.fxt.car)

    })
    it('TC6: Validate do all TCs previous and their conditions.', () => {

        selectMenus.clickSelectValue()
        selectMenus.clickGroup2Option2()
        selectMenus.clickSelectOne()
        selectMenus.clickMs()
        selectMenus.selectOldStyleSelectMenu(this.fxt.color)
        selectMenus.clickMultiselectDropdown()
        selectMenus.clickAllColors()
        cy.contains(this.fxt.noOptions)
        selectMenus.selectStandardMultiSelect(this.fxt.car)

    })
});
import { removeLogs } from '../../support/helper/RemoveLogs';
removeLogs()


