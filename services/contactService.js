'use strict';

const indicative = require('indicative');
const {ContactModel} = require('../models');

module.exports = class ContactService {

    /**
     * Get all contacts
     */
    async getContacts() {
        const list = await ContactModel.find();
        return list;
    } 

    /**
     * Create a contact
     */
    async createContact(bodyUser) {

        await this.validate(bodyUser);

        const contact =  {
            first_name: bodyUser.first_name,
            last_name: bodyUser.last_name,
            email: bodyUser.email,
            phone: bodyUser.phone        
        };
        const record = await ContactModel.create(contact);
        return record;        
    }

    async validate(obj) {
        const rule = {
            first_name: 'required',
            last_name: 'required',
            email: 'required|email',
            phone: 'required'
        };
        const message = {
            required: 'Field Required',
            email: 'Invalid Email'
        };

        return indicative.validateAll(obj, rule, message);
    } 
}