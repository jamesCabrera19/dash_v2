const filteringSystem = (options = {}, data = []) => {
    // console.log("data", data.length);
    let newData = data.filter((el) => {
        if (!el.price) el.price = "$";
        if (el.transactions.length === 0) el.transactions = ["delivery"];
        //
        const objectPrice = Array.from(options.price).length; // options price
        //
        const price = Array.from(el.price).length; // store price
        const deliveryTime = el.delivery_time;
        const rating = el.rating;
        const transactions = el.transactions;
        //
        const distance = Math.round(el.distance * 0.0006214);

        if (options.transactions === "") {
            return (
                distance <= options.distance &&
                price <= objectPrice &&
                rating >= options.rating &&
                deliveryTime < options.time
            );
        } else {
            return (
                distance <= options.distance &&
                price <= objectPrice &&
                rating >= options.rating &&
                deliveryTime < options.time &&
                transactions.includes(options.transactions)
            );
        }
    });
    // console.log("new", newData.length);
    return newData;
};
const filterSystemB = (options = {}, data = [], enableDebug = Boolean) => {
    const newData = data.filter((el) => {
        if (!el.price) el.price = "$";
        if (el.transactions?.length === 0) el.transactions = ["delivery"];
        //
        const objectPrice = Array.from(options.price).length; // options price
        //
        const price = Array.from(el.price).length; // store price
        const deliveryTime = el.delivery_time;
        const rating = el.rating;
        const transactions = el.transactions;
        //
        const distance = Math.round(el.distance * 0.0006214);

        // debugging
        if (enableDebug) {
            const a = {
                name: el.name,
                res: distance <= options.distance,
                test: "distance",
            };
            const b = {
                name: el.name,
                res: price <= objectPrice,
                test: "price",
            };
            const c = {
                name: el.name,
                res: rating >= options.ratings,
                test: "rating",
            };
            const d = {
                name: el.name,
                res: transactions.includes(options.transactions),
                test: "transactions",
            };
            const abcd = [a, b, c, d];

            abcd.forEach((el) => {
                if (!el.res) {
                    console.log(el.test, "FAILED", el.name);
                }
            });
        }

        if (options.transactions === "") {
            return (
                distance <= options.distance &&
                price <= objectPrice &&
                rating >= options.ratings &&
                deliveryTime < options.time
            );
        } else {
            return (
                distance <= options.distance &&
                price <= objectPrice &&
                rating >= options.ratings &&
                deliveryTime < options.time &&
                transactions.includes(options.transactions)
            );
        }
    });
    return newData;
};

export { filteringSystem, filterSystemB };
