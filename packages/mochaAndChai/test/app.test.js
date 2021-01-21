import MochaTestFun from "../app/MochaTestFun";
import {expect} from "chai"
let testDataList=[
    {
        name:"a+b",
        type:'+',
        a:1,b:1,
        value:2
    },
    {
        name:"a-b",
        type:'-',
        a:1,b:1,
        value:0
    },
    {
        name:"a*b",
        type:'*',
        a:1,b:1,
        value:1
    },
    {
        name:"a/b",
        type:'/',
        a:1,b:1,
        value:1
    },
]
describe('test', function () {
    it('should get right value', function () {
        for (let i = 0; i < testDataList.length; i++) {
            const item = testDataList[i];
            expect(MochaTestFun(item.type,item.a,item.b)).to.equal(item.value)
        }
    });
})