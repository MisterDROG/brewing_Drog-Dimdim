import { searchFilter, searchCatalog, priceFilter, newFilter } from '../components/shopComponents/searchFilter'

describe('Test for filter functions', () => {

    const testData = [
        {title: 'First product', category: 'glass', price: 2000, new: true},
        {title: 'Second product', category: 'glass', price: 3000, new: false},
        {title: 'Third product', category: 'good', price: 4000, new: false}
    ]

    test('Search filter', () => {
        const testValue = 'First product'
        const testResult = [{title: 'First product', category: 'glass', price: 2000, new: true}]
        expect(searchFilter(testData, testValue)).toEqual(testResult)
    })

    test('Search catalog', () => {
        const testValue = 'glass'
        const testResult = [{title: 'First product', category: 'glass', price: 2000, new: true}, {title: 'Second product', category: 'glass', price: 3000, new: false}]
        expect(searchCatalog(testData, testValue)).toEqual(testResult)
    })

    test('Filter price', () => {
        const testValueMin = 2500
        const testValueMax = 6000
        const testResult = [{title: 'Second product', category: 'glass', price: 3000, new: false}, {title: 'Third product', category: 'good', price: 4000, new: false}]
        expect(priceFilter(testData, testValueMin, testValueMax)).toEqual(testResult)
    })

    test('Filter new product', () => {
        const testValue = true
        const testResult = [{title: 'First product', category: 'glass', price: 2000, new: true}]
        expect(newFilter(testData, testValue)).toEqual(testResult)
    })

})

