"use strict";

//Импорт пейдж обджекта из другого файла
let NotesPage = require('./pageObjects/NotesPage.js').NotesPage


describe('Preserver tests', function () {
    let notesPage = new NotesPage()
    
    
    it('should be created when title and body provided', function () {
        notesPage.createNote('Test', 'Test')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })
    it('should be created when only title provided', function () {
        notesPage.createNote('Test', '')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })
    it('should be created when only body provided', function () {
        notesPage.createNote('', 'Test')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })
    it('should NOT be created when nothing provided', function () {
        notesPage.baseNote('', '')
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
    })
    
    
})