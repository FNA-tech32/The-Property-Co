const agency = {
    name: 'The Property Co',
    logo: {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=200&q=60',
    },
};

const locations = [
    { id: '5002', externalID: '5002', name: 'Dubai' },
    { id: '5003', externalID: '5003', name: 'Dubai Marina' },
    { id: '5093', externalID: '5093', name: 'Downtown Dubai' },
    { id: '5460', externalID: '5460', name: 'Palm Jumeirah' },
    { id: '5046', externalID: '5046', name: 'Business Bay' },
    { id: '5416', externalID: '5416', name: 'Jumeirah' },
];

const photo = (id, path) => ({
    id,
    url: `https://images.unsplash.com/${path}?auto=format&fit=crop&w=1200&q=80`,
});

const amenities = (items) => [{ amenities: items.map((text) => ({ text })) }];

const listings = [
    {
        id: '101',
        externalID: '101',
        title: 'Marina Walk apartment with sea view',
        purpose: 'for-rent',
        rentFrequency: 'yearly',
        price: 120000,
        rooms: 2,
        baths: 2,
        area: 1180,
        categoryExternalID: '4',
        locationExternalID: '5003',
        furnishingStatus: 'furnished',
        isVerified: true,
        score_l1: 36,
        randBoostScore: 92,
        description: 'A bright two-bedroom apartment on Marina Walk, with a balcony facing the marina and covered parking.',
        photos: [
            photo('101-1', 'photo-1502672260266-1c1ef2d93688'),
            photo('101-2', 'photo-1560448204-e02f11c3d0e2'),
        ],
    },
    {
        id: '102',
        externalID: '102',
        title: 'Downtown one-bedroom near the Boulevard',
        purpose: 'for-rent',
        rentFrequency: 'yearly',
        price: 95000,
        rooms: 1,
        baths: 1,
        area: 780,
        categoryExternalID: '4',
        locationExternalID: '5093',
        furnishingStatus: 'furnished',
        isVerified: true,
        score_l1: 28,
        randBoostScore: 80,
        description: 'A furnished one-bedroom close to Downtown Dubai, with a fitted kitchen and building gym access.',
        photos: [
            photo('102-1', 'photo-1493809842364-78817add7ffb'),
            photo('102-2', 'photo-1484154218962-a197022b5858'),
        ],
    },
    {
        id: '103',
        externalID: '103',
        title: 'Business Bay studio, yearly lease',
        purpose: 'for-rent',
        rentFrequency: 'yearly',
        price: 62000,
        rooms: 1,
        baths: 1,
        area: 520,
        categoryExternalID: '4',
        locationExternalID: '5046',
        furnishingStatus: 'unfurnished',
        isVerified: false,
        score_l1: 14,
        randBoostScore: 55,
        description: 'A compact studio in Business Bay, suited to a first home, with canal views from the upper floors.',
        photos: [
            photo('103-1', 'photo-1522708323590-d24dbb6b0267'),
            photo('103-2', 'photo-1505693416388-ac5ce068fe85'),
        ],
    },
    {
        id: '104',
        externalID: '104',
        title: 'Jumeirah townhouse with private garden',
        purpose: 'for-rent',
        rentFrequency: 'yearly',
        price: 240000,
        rooms: 3,
        baths: 3,
        area: 2400,
        categoryExternalID: '16',
        locationExternalID: '5416',
        furnishingStatus: 'furnished',
        isVerified: true,
        score_l1: 41,
        randBoostScore: 88,
        description: 'A three-bedroom townhouse in Jumeirah with a private garden, maid’s room, and a community pool.',
        photos: [
            photo('104-1', 'photo-1564013799919-ab600027ffc6'),
            photo('104-2', 'photo-1600585154340-be6161a56a0c'),
        ],
    },
    {
        id: '105',
        externalID: '105',
        title: 'Palm Jumeirah apartment, monthly rent',
        purpose: 'for-rent',
        rentFrequency: 'monthly',
        price: 18000,
        rooms: 2,
        baths: 2,
        area: 1400,
        categoryExternalID: '4',
        locationExternalID: '5460',
        furnishingStatus: 'furnished',
        isVerified: true,
        score_l1: 22,
        randBoostScore: 74,
        description: 'A furnished Palm apartment available on a monthly lease, with beach access and two parking bays.',
        photos: [
            photo('105-1', 'photo-1512917774080-9991f1c4c750'),
            photo('105-2', 'photo-1600607687939-ce8a6c25118c'),
        ],
    },
    {
        id: '106',
        externalID: '106',
        title: 'Marina family apartment, three bedrooms',
        purpose: 'for-rent',
        rentFrequency: 'yearly',
        price: 175000,
        rooms: 3,
        baths: 3,
        area: 1680,
        categoryExternalID: '4',
        locationExternalID: '5003',
        furnishingStatus: 'unfurnished',
        isVerified: true,
        score_l1: 19,
        randBoostScore: 67,
        description: 'An unfurnished three-bedroom in Dubai Marina, with a closed kitchen and a balcony on the marina side.',
        photos: [
            photo('106-1', 'photo-1600210492486-724fe5c67fb0'),
            photo('106-2', 'photo-1600566753086-00f18fb6b3ea'),
        ],
    },
    {
        id: '201',
        externalID: '201',
        title: 'Downtown apartment ready to move in',
        purpose: 'for-sale',
        price: 890000,
        rooms: 1,
        baths: 2,
        area: 860,
        categoryExternalID: '4',
        locationExternalID: '5093',
        furnishingStatus: 'furnished',
        isVerified: true,
        score_l1: 33,
        randBoostScore: 90,
        description: 'A furnished one-bedroom in Downtown Dubai, a short walk from the Boulevard and the metro.',
        photos: [
            photo('201-1', 'photo-1600585154526-990dced4db0d'),
            photo('201-2', 'photo-1600573472592-401b489a3cdc'),
        ],
    },
    {
        id: '202',
        externalID: '202',
        title: 'Business Bay two-bedroom for sale',
        purpose: 'for-sale',
        price: 1450000,
        rooms: 2,
        baths: 2,
        area: 1320,
        categoryExternalID: '4',
        locationExternalID: '5046',
        furnishingStatus: 'unfurnished',
        isVerified: true,
        score_l1: 27,
        randBoostScore: 76,
        description: 'A two-bedroom apartment in Business Bay with canal views, a study nook, and building concierge.',
        photos: [
            photo('202-1', 'photo-1600047509807-ba8f99d2cdbc'),
            photo('202-2', 'photo-1600566753190-17f0baa2a6c3'),
        ],
    },
    {
        id: '203',
        externalID: '203',
        title: 'Jumeirah villa with pool',
        purpose: 'for-sale',
        price: 3200000,
        rooms: 4,
        baths: 5,
        area: 4200,
        categoryExternalID: '3',
        locationExternalID: '5416',
        furnishingStatus: 'furnished',
        isVerified: true,
        score_l1: 48,
        randBoostScore: 96,
        description: 'A four-bedroom villa in Jumeirah with a private pool, landscaped garden, and a separate driver room.',
        photos: [
            photo('203-1', 'photo-1613490493576-7fde63acd811'),
            photo('203-2', 'photo-1600596542815-ffad4c1539a9'),
        ],
    },
    {
        id: '204',
        externalID: '204',
        title: 'Palm residence with beach access',
        purpose: 'for-sale',
        price: 2750000,
        rooms: 3,
        baths: 4,
        area: 2100,
        categoryExternalID: '4',
        locationExternalID: '5460',
        furnishingStatus: 'furnished',
        isVerified: true,
        score_l1: 31,
        randBoostScore: 84,
        description: 'A three-bedroom residence on Palm Jumeirah with direct beach access and a large terrace.',
        photos: [
            photo('204-1', 'photo-1600607687644-aac4c3eac7f4'),
            photo('204-2', 'photo-1600585153490-76fb20a32601'),
        ],
    },
    {
        id: '205',
        externalID: '205',
        title: 'Marina penthouse, high floor',
        purpose: 'for-sale',
        price: 4100000,
        rooms: 4,
        baths: 5,
        area: 3600,
        categoryExternalID: '18',
        locationExternalID: '5003',
        furnishingStatus: 'furnished',
        isVerified: true,
        score_l1: 18,
        randBoostScore: 70,
        description: 'A high-floor penthouse in Dubai Marina with a private terrace and open-plan living space.',
        photos: [
            photo('205-1', 'photo-1600607687920-4e2a09cf159d'),
            photo('205-2', 'photo-1600210492493-0946911123ea'),
        ],
    },
    {
        id: '206',
        externalID: '206',
        title: 'Downtown two-bedroom with park view',
        purpose: 'for-sale',
        price: 1680000,
        rooms: 2,
        baths: 3,
        area: 1450,
        categoryExternalID: '4',
        locationExternalID: '5093',
        furnishingStatus: 'unfurnished',
        isVerified: false,
        score_l1: 12,
        randBoostScore: 48,
        description: 'An unfurnished two-bedroom overlooking a Downtown park, with two parking spaces included.',
        photos: [
            photo('206-1', 'photo-1600121848594-d8644e57abab'),
            photo('206-2', 'photo-1600585152220-90363fe7e115'),
        ],
    },
].map((item) => ({
    ...item,
    agency,
    coverPhoto: { url: item.photos[0].url },
    type: {
        4: 'Apartment',
        16: 'Townhouse',
        3: 'Villa',
        18: 'Penthouse',
    }[item.categoryExternalID],
    amenities: amenities(['Central A/C', 'Balcony', 'Covered Parking', 'Shared Pool']),
}));

const toNumber = (value, fallback) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
};

export const searchLocations = (term = '') => {
    const query = term.trim().toLowerCase();
    if (!query) return [];
    return locations.filter((location) => location.name.toLowerCase().includes(query));
};

export const getListing = (id) => listings.find((item) => String(item.externalID) === String(id)) || null;

export const searchListings = (query = {}) => {
    const purpose = query.purpose;
    const rentFrequency = query.rentFrequency;
    const minPrice = toNumber(query.minPrice, 0);
    const maxPrice = toNumber(query.maxPrice, purpose === 'for-sale' ? 10000000 : 1000000);
    const roomsMin = toNumber(query.roomsMin, 0);
    const bathsMin = toNumber(query.bathsMin, 0);
    const areaMax = toNumber(query.areaMax, 35000);
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID;
    const sort = query.sort || 'price-desc';

    let results = listings.filter((item) => {
        if (purpose && item.purpose !== purpose) return false;
        if (purpose === 'for-rent' && rentFrequency && item.rentFrequency !== rentFrequency) return false;
        if (item.price < minPrice || item.price > maxPrice) return false;
        if (item.rooms < roomsMin || item.baths < bathsMin) return false;
        if (item.area > areaMax) return false;
        if (categoryExternalID && String(item.categoryExternalID) !== String(categoryExternalID)) return false;
        if (locationExternalIDs !== '5002' && String(item.locationExternalID) !== String(locationExternalIDs)) return false;
        if (query.furnishingStatus && item.furnishingStatus !== query.furnishingStatus) return false;
        return true;
    });

    const byPrice = (direction) => results.sort((a, b) => direction * (a.price - b.price));

    if (sort === 'price-asc') byPrice(1);
    else if (sort === 'price-des' || sort === 'price-desc') byPrice(-1);
    else if (sort === 'date-asc') results = [...results].reverse();
    else if (sort === 'verified-score') results.sort((a, b) => Number(b.isVerified) - Number(a.isVerified));

    return results;
};
