


const initialState = {

    property_name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    imageUrl: "",
    monthlyMortgageAmount: 0,
    desiredMonthlyRent: 0

}

const UPDATE_PROPERTYNAME_TYPE = "UPDATE_PROPERTYNAME_TYPE";
const UPDATE_ADDRESS_TYPE = "UPDATE_ADDRESS_TYPE";
const UPDATE_CITY_TYPE = "UPDATE_CITY_TYPE";
const UPDATE_STATE_TYPE = "UPDATE_STATE_TYPE";
const UPDATE_ZIPCODE_TYPE = "UPDATE_ZIPCODE_TYPE";
const UPDATE_IMAGEURL_TYPE = "UPDATE_IMAGEURL_TYPE";
const UPDATE_MORTGAGEAMOUNT_TYPE = "UPDATE_MORTGAGEAMOUNT_TYPE";
const UPDATE_MONTHLYRENT_TYPE = "UPDATE_MONTHLYRENT_TYPE";
const SET_ALL_NEW_HOUSE_DATA_TO_DEFAULTS = 'SET_ALL_NEW_HOUSE_DATA_TO_DEFAULTS';



function reducer(state=initialState, action){
   switch (action.type){
       case UPDATE_PROPERTYNAME_TYPE:
             return Object.assign({}, state, {property_name:action.payload});

        case UPDATE_ADDRESS_TYPE:
             return Object.assign({}, state, {address:action.payload});

        case UPDATE_CITY_TYPE:
             return Object.assign({}, state, {city:action.payload});

        case UPDATE_STATE_TYPE:
             return Object.assign({}, state, {state:action.payload});

        case UPDATE_ZIPCODE_TYPE:
             return Object.assign({}, state, {zipcode:action.payload});

        case UPDATE_IMAGEURL_TYPE:
            return Object.assign({}, state, {imageUrl:action.payload});

        case UPDATE_MORTGAGEAMOUNT_TYPE:
            return Object.assign({}, state, {monthlyMortgageAmount:action.payload});

        case UPDATE_MONTHLYRENT_TYPE:
            return Object.assign({}, state, {desiredMonthlyRent:action.payload});

        case SET_ALL_NEW_HOUSE_DATA_TO_DEFAULTS:
            return Object.assign({}, state, {
                property_name: "",
                address: "",
                city: "",
                state: "",
                zipcode: "",
                imageUrl: "",
                monthlyMortgageAmount: 0,
                desiredMonthlyRent: 0,
            });


        default:
            return state;
   }
}


export function updatePropertynameType(propertynameType){
        return {
            type:UPDATE_PROPERTYNAME_TYPE,
            payload:propertynameType
        }
}


export function updateAddressType(addressType){
    return {
        type:UPDATE_ADDRESS_TYPE,
        payload:addressType
    }
};

export function updateCityType(cityType){
    return {
        type:UPDATE_CITY_TYPE,
        payload:cityType
    }
};

export function updateStateType(stateType){
    return {
        type:UPDATE_STATE_TYPE,
        payload:stateType
    }
};

export function updateZipcodeType(zipcodeType){
    return {
        type:UPDATE_ZIPCODE_TYPE,
        payload:zipcodeType
    }
};


export function updateImageurlType(imageurlType){
    console.log(imageurlType);
    return {
        type:UPDATE_IMAGEURL_TYPE,
        payload:imageurlType
    }
};


export function updateMortgageamountType(mortgageamountType){
    return {
        type:UPDATE_MORTGAGEAMOUNT_TYPE,
        payload:mortgageamountType
    }
};


export function updateMonthlyrentType(monthlyrentType){
    return {
        type:UPDATE_MONTHLYRENT_TYPE,
        payload:monthlyrentType
    }
};




export default reducer;