import getDataPH from "../components/shopComponents/getData"

const testResult = [
    {
        "category": "Classic",
        "id": 0,
        "img": "https://lh3.google.com/u/0/d/1ZwgPY-VrPpe3KVOIkMLdTbtk-juZPY8C=w1027-h1343-iv1",
        "new": false,
        "price": 150,
        "subtitle": "Lager",
        "title": "Hello Bro"
    },
    {
        "category": "IPA",
        "id": 1,
        "img": "https://lh3.google.com/u/0/d/1LekvkwFbiYGVt5c7IgHFspawulqSG0Nz=w1027-h1343-iv1",
        "new": false,
        "price": 300,
        "subtitle": "IPA",
        "title": "Indiano"
    },
    {
        "category": "Unfiltered",
        "id": 2,
        "img": "https://lh3.google.com/u/0/d/1A-d3D8QKt-S6XCcvmlqO0HvAjMvjJ3G8=w1027-h1343-iv1",
        "new": false,
        "price": 230,
        "subtitle": "Unfiltered",
        "title": "Belgian"
    },
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
        "category": "Gose",
        "id": 4,
        "img": "https://lh3.google.com/u/0/d/1qYedZgRvkQnyh6Otbn_rgOYQar5TnGWR=w1027-h1343-iv1",
        "new": true,
        "price": 330,
        "subtitle": "Tomato Gose",
        "title": "Red Energy"
    },
    {
        "category": "Classic",
        "id": 5,
        "img": "https://lh3.google.com/u/0/d/1aVLwD_X3z_Xw_II50RFqewbVM4i_BQVD=w1027-h1343-iv1",
        "new": false,
        "price": 190,
        "subtitle": "Pilsner",
        "title": "ProPiller"
    },
    {
        "category": "IPA",
        "id": 6,
        "img": "https://lh3.google.com/u/0/d/1Jw05nwH_qazMRE1PO_bt8CGg5xVA7CaW=w863-h550-iv1",
        "new": true,
        "price": 370,
        "subtitle": "DIPA",
        "title": "Double"
    },
    {
        "category": "Unfiltered",
        "id": 7,
        "img": "https://lh3.google.com/u/0/d/13gbePoxmPG4Z66Km_u9LXbuVHNH-emVC=w1027-h1343-iv1",
        "new": true,
        "price": 410,
        "subtitle": "Wheat beer",
        "title": "Munich"
    },
    {
        "category": "Cider",
        "id": 8,
        "img": "https://lh3.google.com/u/0/d/1Usti2AHbjLOVxzOA-OQt4mdmSxdLOtAT=w1027-h1343-iv1",
        "new": false,
        "price": 270,
        "subtitle": "Cherry Cider",
        "title": "Sister"
    },
    {
        "category": "Gose",
        "id": 9,
        "img": "https://lh3.google.com/u/0/d/1caNuhxjtQHNTCwaZwsuSmZV5I6NqJKiX=w1027-h1343-iv1",
        "new": true,
        "price": 510,
        "subtitle": "Gaspacho Gose",
        "title": "Late Lunch"
    },
    {
        "category": "Classic",
        "id": 10,
        "img": "https://lh3.google.com/u/0/d/1eskkQ6aHawrx0HHAIfZ-vJcJzMSS90Yi=w2560-h1367-iv1",
        "new": false,
        "price": 170,
        "subtitle": "Ale",
        "title": "AL entry"
    },
    {
        "category": "Unfiltered",
        "id": 11,
        "img": "https://lh3.google.com/u/0/d/15pxgEjmOdAbx-izo4BnBG8b1XPXQ56kG=w1027-h1343-iv1",
        "new": false,
        "price": 260,
        "subtitle": "Weiss beer",
        "title": "Why not"
    },
    {
        "category": "Cider",
        "id": 12,
        "img": "https://lh3.google.com/u/0/d/1yJolw3IvwrdjV2ES3-pyZO3zImScqzsZ=w1027-h1343-iv1",
        "new": false,
        "price": 350,
        "subtitle": "Berry Sour",
        "title": "So Our"
    },
    {
        "category": "Gose",
        "id": 13,
        "img": "https://lh3.google.com/u/0/d/1NYdtkDhnL_skhQmClaiXeD9ieo8VQQ4P=w1027-h1343-iv1",
        "new": true,
        "price": 460,
        "subtitle": "Italian Gose",
        "title": "Go sense"
    },
    {
        "category": "Classic",
        "id": 14,
        "img": "https://lh3.google.com/u/0/d/1ul4Q37utKyKY2NZ6faLR0AfQCC9p9hWG=w2560-h1367-iv1",
        "new": true,
        "price": 310,
        "subtitle": "German Lager",
        "title": "Gerald"
    }
]

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(testResult),
  })
);

describe('Get data module', () => {
    beforeEach(() => {
        fetch.mockClear();
    })

    test('Get data', async () => {
        const data = await getDataPH()
        expect(data).toEqual(testResult)
    })
})


