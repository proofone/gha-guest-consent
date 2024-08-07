import { GuestData, GuestDataRetVal } from "../components/models"
import testData from "../../tests/test_data_users.json"

export async function fetchGuestData(profileId: string, mock: boolean = false): Promise<GuestDataRetVal|undefined> {
    let retVal: GuestDataRetVal = {data: null, success: false, error: null}
    
    if (mock) {
        const customerDataArr = testData?.customersData.filter((c: GuestData) => c.RIID_ === profileId)
        customerDataArr.at(0) ? retVal.data = customerDataArr.at(0) : retVal.error = "Customer data not found"

    } else if (process.env.API_URL) {
        let API_URL = process.env.API_URL
        
        try {
            retVal.data = await fetch(`${API_URL}/customer/${profileId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error in response: ${response.status} ${response.statusText}`);
                    } else {
                        return response.json();
                    }
                })
                    // .then(rj => retVal.data = rj.data)

        } catch (error: any) {
            retVal.error = error.message
        }
    }

    return retVal
}
