/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateItemRequest } from '../models/CreateItemRequest';
import type { CreateItemResponse } from '../models/CreateItemResponse';
import type { GetItemRequest } from '../models/GetItemRequest';
import type { GetItemResponse } from '../models/GetItemResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Create Item
     * @param requestBody
     * @returns GetItemResponse Successful Response
     * @throws ApiError
     */
    public static createItemItemsGet(
        requestBody: GetItemRequest,
    ): CancelablePromise<GetItemResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/items',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Item
     * @param requestBody
     * @returns CreateItemResponse Successful Response
     * @throws ApiError
     */
    public static createItemItemsPost(
        requestBody: CreateItemRequest,
    ): CancelablePromise<CreateItemResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/items/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
