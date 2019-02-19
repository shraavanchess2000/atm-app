"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var transaction_service_1 = require("./transaction.service");
describe('TransactionService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(transaction_service_1.TransactionService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=transaction.service.spec.js.map