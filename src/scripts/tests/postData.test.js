import postDataPH from "../components/shopComponents/postData";

const testData = [
    {
        "category": "Cider",
        "id": 3,
        "img": "https://lh3.google.com/u/0/d/1q7UJsaSdpfxO_IZIxDnOfEDjIk0K5csu=w1027-h1343-iv1",
        "new": true,
        "price": 450,
        "subtitle": "Melon Cider",
        "title": "Millennium"
    },
    {
        "category": "Unfiltered",
        "id": 2,
        "img": "https://lh3.google.com/u/0/d/1A-d3D8QKt-S6XCcvmlqO0HvAjMvjJ3G8=w1027-h1343-iv1",
        "new": false,
        "price": 230,
        "subtitle": "Unfiltered",
        "title": "Belgian"
    }
]  

const testResult = {
    "0": {
        "category": "Cider",
        "id": 3,
        "img": "https://lh3.google.com/u/0/d/1q7UJsaSdpfxO_IZIxDnOfEDjIk0K5csu=w1027-h1343-iv1",
        "new": true,
        "price": 450,
        "subtitle": "Melon Cider",
        "title": "Millennium"
    },
    "1": {
        "category": "Unfiltered",
        "id": 2,
        "img": "https://lh3.google.com/u/0/d/1A-d3D8QKt-S6XCcvmlqO0HvAjMvjJ3G8=w1027-h1343-iv1",
        "new": false,
        "price": 230,
        "subtitle": "Unfiltered",
        "title": "Belgian"
    },
    "id": 101
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(testResult),
  })
);

describe('Post data module', () => {
    beforeEach(() => {
        fetch.mockClear();
    })

    test('Post data', async () => {
        const data = await postDataPH(testData)
        expect(data).toEqual(testResult)
    })
})

