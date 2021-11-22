export default async function orderRank(users: any) {

    try {
        function compararNumeros(a: any, b: any) {
            return b.newRating - a.newRating
        }

        const result = await users.sort(compararNumeros)

        return result
    } catch (error) {
        console.log(error, ' Error order ranking.')
        return error
    }
}