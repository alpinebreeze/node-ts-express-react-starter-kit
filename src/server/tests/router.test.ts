const mockGet = jest.fn();
const mockRouter = jest.fn(() => ({ get: mockGet, use: jest.fn() }));

jest.mock("express", () => ({
    Router: mockRouter,
    static: jest.fn(),
}));

import router, { getRootRequestHandler } from "../router";

describe("getRootRequestHandler", () => {

    it("should render index when no name is passed as a query", () => {

        const mockRes = {
            render: jest.fn(),
        };

        getRootRequestHandler({ query: {} } as any, mockRes as any, jest.fn());
        expect(mockRes.render.mock.calls[0][0]).toBe("index");
    });

    it("should render index when name Richard is passed as a query", () => {

        const mockRes = {
            render: jest.fn(),
        };

        getRootRequestHandler({ query: { name: "Richard" } } as any, mockRes as any, jest.fn());
        expect(mockRes.render.mock.calls[0][0]).toBe("index");
    });
});

describe("router", () => {

    it("should bind getRootRequestHandler to the HTTP GET method", () => {

        router();
        expect(mockGet).toBeCalledWith("/", getRootRequestHandler);
    });
});
