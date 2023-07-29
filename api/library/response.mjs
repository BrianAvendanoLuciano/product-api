export default class Response {
    static success(res, {...body}, code=200) {
        return res.status(code).json({
            result: 'success',
            ...body
        });
    }

    static unauthorized(res, {...body}, code=401) {
        return res.status(code).json({
            result: 'unauthorized',
            ...body
        });
    }

    static error(res, result='error', {...body}, code=500) {
        return res.status(code).json({
            result,
            ...body
        });
    }
}