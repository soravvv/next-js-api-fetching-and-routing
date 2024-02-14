const getPridctedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
}

const getPridctedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
}

const getPridctedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
}

interface Params {
    params: { name: string }
}

const Page = async ({ params }: Params) => {
    const ageData = getPridctedAge(params.name);
    const genderData = getPridctedGender(params.name);
    const countryData = getPridctedCountry(params.name);

    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);

    return (
        <div>
            <div>Personal Info</div>
            <div>Name: {params.name}</div>
            <div>Age: {age?.age}</div>
            <div>Gender: {gender?.gender}</div>
            <div>Country {country?.country[0]?.country_id}</div>
        </div>
    )
}

export default Page

