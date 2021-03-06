"use strict";
let MenuActionsFragment = require('./pageObjects/fragments/MenuActionsFragment.js').MenuActionsFragment
let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
let AboutPage = require('./pageObjects/AboutPage.js').AboutPage
let EC = protractor.ExpectedConditions


describe('About page tests', function () {
	let menu = new MenuActionsFragment()
    let aboutPage = new AboutPage()
    let notesPage = new NotesPage()
	
    it('should be review Back to notes, Twitter, GitHub icons', function () {
        menu.openAboutPage()
        expect(aboutPage.iconTwitter.isDisplayed()).toBe(true,
			'Icon Twitter should be displayed')
        expect(aboutPage.backToNotes.isDisplayed()).toBe(true,
			 'Icon Back to Notes should be displayed')
        expect(aboutPage.iconGithub.isDisplayed()).toBe(true,
			 'Icon GitHub should be displayed')
	})
})