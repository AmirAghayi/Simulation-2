


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



function reducer(state=initialState, action){
   switch (action.type){
       case UPDATE_PROPERTYNAME_TYPE:
             return Object.assign({}, state, {propertynameType:action.payload});

        case UPDATE_ADDRESS_TYPE:
             return Object.assign({}, state, {addressType:action.payload});

        case UPDATE_CITY_TYPE:
             return Object.assign({}, state, {cityType:action.payload});

        case UPDATE_STATE_TYPE:
             return Object.assign({}, state, {stateType:action.payload});

        case UPDATE_ZIPCODE_TYPE:
             return Object.assign({}, state, {zipcodeType:action.payload});

        case UPDATE_IMAGEURL_TYPE:
            return Object.assign({}, state, {imageurlType:action.payload});

        case UPDATE_MORTGAGEAMOUNT_TYPE:
            return Object.assign({}, state, {mortgageamountType:action.payload});

        case UPDATE_MONTHLYRENT_TYPE:
            return Object.assign({}, state, {monthlyrentType:action.payload});


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
    return {
        type:UPDATE_IMAGEURL_TYPE,
        payload:imageurlType
    }
};


export function updateMortgageamoutType(mortgageamountType){
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