const bSellerOrder = {
    "idEntrega": 60284723,
    "dataEntregaCorrigida": "2021-08-25T00:00:00.000-03:00",
    "ponto": {
        "id": "NFA",
        "descricao": "NFe Aprovada",
        "data": "2021-08-16T08:10:31.000-03:00"
    },
    "transportadora": {
        "id": null,
        "nome": null,
        "contrato": null,
        "idIntegrador": null
    },
    "notaFiscal": {
        "id": 257,
        "serie": "5",
        "dataEmissao": "2021-08-16T00:00:00.000-03:00",
        "chaveAcesso": "35210812605744000119550050000002571189911720",
        "linkNfe": "http://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=completa&tipoConteudo=XbSeqxE8pl8=&nfe=35210812605744000119550050000002571189911720"
    },
    "pedido": {
        "numeroPedido": "115363007506801",
        "numeroPedidoExterno": "1153630075068-01"
    },
    "codigosRastreio": [
        "QE296690693BR"
    ]
}

const orderDetails = {
    "requestUrl": "https://axxis.vtexcommercestable.com.br/api/oms/pvt/orders/1153630075068-01?",
    "requestHeaders": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-VTEX-API-AppToken": "CQLIATQYCTKSLXONXPAOORDPNGXKAHJHXOXPCSKCEZGUGHRSYUJQOFWLMWUUWGXVJCUXAZKFEXKPLJJFOELGXTSSRMCGXQFYCKLDNUSZJELQUGZDNPGSUQYPKCFOWEHO",
        "X-VTEX-API-AppKey": "vtexappkey-axxis-SHPVNH",
        "store": "SHPVNH",
        "accountName": "axxis",
        "environment": "vtexcommercestable"
    },
    "body": {
        "orderId": "1153630075068-01",
        "sequence": "501117",
        "marketplaceOrderId": "",
        "marketplaceServicesEndpoint": "http://oms.vtexinternal.com.br/api/oms?an=axxis",
        "sellerOrderId": "00-1153630075068-01",
        "origin": "Marketplace",
        "affiliateId": "",
        "salesChannel": "1",
        "merchantName": null,
        "status": "ready-for-handling",
        "statusDescription": "Pronto para o manuseio",
        "value": 54900,
        "creationDate": "2021-08-12T11:01:15.7085997+00:00",
        "lastChange": "2021-08-12T11:31:45.4347595+00:00",
        "orderGroup": "1153630075068",
        "totals": [
            {
                "id": "Items",
                "name": "Total dos Itens",
                "value": 54900
            },
            {
                "id": "Discounts",
                "name": "Total dos Descontos",
                "value": 0
            },
            {
                "id": "Shipping",
                "name": "Total do Frete",
                "value": 0
            },
            {
                "id": "Tax",
                "name": "Total da Taxa",
                "value": 0
            }
        ],
        "items": [
            {
                "uniqueId": "B99D66043D644D869C59EA6F53CDE0E0",
                "id": "897",
                "productId": "29",
                "ean": "7908328519590",
                "lockId": "00-1153630075068-01",
                "itemAttachment": {
                    "content": {},
                    "name": null
                },
                "attachments": [],
                "quantity": 1,
                "seller": "1",
                "name": "CAPACETE AXXIS DRAKEN VECTOR MATT BLACK/RED/GOLD 60/L",
                "refId": "601009056",
                "price": 54900,
                "listPrice": 54900,
                "manualPrice": null,
                "priceTags": [
                    {
                        "name": "discount@shipping-e4b22e4e-11b4-43a5-9339-dc4e1f48d10c#9bf084aa-68c2-4fa2-96b7-b61828e787b9",
                        "value": -3242,
                        "isPercentual": false,
                        "identifier": "e4b22e4e-11b4-43a5-9339-dc4e1f48d10c",
                        "rawValue": -32.42,
                        "rate": null,
                        "jurisCode": null,
                        "jurisType": null,
                        "jurisName": null
                    }
                ],
                "imageUrl": "https://axxis.vteximg.com.br/arquivos/ids/158589-80-80/601009056.jpg?v=637594629340200000",
                "detailUrl": "/601009/p",
                "components": [],
                "bundleItems": [],
                "params": [],
                "offerings": [],
                "sellerSku": "897",
                "priceValidUntil": null,
                "commission": 0,
                "tax": 0,
                "preSaleDate": null,
                "additionalInfo": {
                    "brandName": "AXXIS",
                    "brandId": "60725",
                    "categoriesIds": "/1/4/",
                    "categories": [
                        {
                            "id": 4,
                            "name": "DRAKEN"
                        },
                        {
                            "id": 1,
                            "name": "AXXIS"
                        }
                    ],
                    "productClusterId": "141,142,143",
                    "commercialConditionId": "1",
                    "dimension": {
                        "cubicweight": 1.9,
                        "height": 0.27,
                        "length": 0.35,
                        "weight": 2.1,
                        "width": 0.27
                    },
                    "offeringInfo": null,
                    "offeringType": null,
                    "offeringTypeId": null
                },
                "measurementUnit": "un",
                "unitMultiplier": 1,
                "sellingPrice": 54900,
                "isGift": false,
                "shippingPrice": null,
                "rewardValue": 0,
                "freightCommission": 0,
                "priceDefinition": {
                    "sellingPrices": [
                        {
                            "value": 54900,
                            "quantity": 1
                        }
                    ],
                    "calculatedSellingPrice": 54900,
                    "total": 54900
                },
                "taxCode": "",
                "parentItemIndex": null,
                "parentAssemblyBinding": null,
                "callCenterOperator": null,
                "serialNumbers": null,
                "assemblies": [],
                "costPrice": 54900
            }
        ],
        "marketplaceItems": [],
        "clientProfileData": {
            "id": "clientProfileData",
            "email": "3a37151caee74e4bbf6c1ecacea8bda5@ct.vtex.com.br",
            "firstName": "João Victor ",
            "lastName": "Silva Oliveira",
            "documentType": "cpf",
            "document": "02971727190",
            "phone": "+5567996703950",
            "corporateName": null,
            "tradeName": null,
            "corporateDocument": null,
            "stateInscription": "",
            "corporatePhone": null,
            "isCorporate": false,
            "userProfileId": "4776ef56-f3a9-4473-a550-7db17be07a1d",
            "customerClass": null
        },
        "giftRegistryData": null,
        "marketingData": null,
        "ratesAndBenefitsData": {
            "id": "ratesAndBenefitsData",
            "rateAndBenefitsIdentifiers": [
                {
                    "description": "Frete Grátis acima de 120 reais",
                    "featured": true,
                    "id": "e4b22e4e-11b4-43a5-9339-dc4e1f48d10c",
                    "name": "Frete Grátis",
                    "matchedParameters": {},
                    "additionalInfo": null
                }
            ]
        },
        "shippingData": {
            "id": "shippingData",
            "address": {
                "addressType": "residential",
                "receiverName": "João Victor  Silva Oliveira",
                "addressId": "4885828976232",
                "postalCode": "79944-000",
                "city": "Cristalina",
                "state": "MS",
                "country": "BRA",
                "street": "Rua padre José de anchieta ",
                "number": "340",
                "neighborhood": "Cristalina-MS",
                "complement": "Casa da Duda ",
                "reference": null,
                "geoCoordinates": [
                    -54.7601203918457,
                    -22.49483871459961
                ]
            },
            "logisticsInfo": [
                {
                    "itemIndex": 0,
                    "selectedSla": "PAC",
                    "lockTTL": "12d",
                    "price": 0,
                    "listPrice": 3242,
                    "sellingPrice": 0,
                    "deliveryWindow": null,
                    "deliveryCompany": "Correios - PAC",
                    "shippingEstimate": "13bd",
                    "shippingEstimateDate": "2021-08-31T17:00:00.0000000+00:00",
                    "slas": [
                        {
                            "id": "PAC",
                            "name": "PAC",
                            "shippingEstimate": "13bd",
                            "deliveryWindow": null,
                            "price": 0,
                            "deliveryChannel": "delivery",
                            "pickupStoreInfo": {
                                "additionalInfo": null,
                                "address": null,
                                "dockId": null,
                                "friendlyName": null,
                                "isPickupStore": false
                            },
                            "polygonName": null,
                            "lockTTL": "12d",
                            "pickupPointId": null,
                            "transitTime": "11bd"
                        },
                        {
                            "id": "SEDEX",
                            "name": "SEDEX",
                            "shippingEstimate": "8bd",
                            "deliveryWindow": null,
                            "price": 5744,
                            "deliveryChannel": "delivery",
                            "pickupStoreInfo": {
                                "additionalInfo": null,
                                "address": null,
                                "dockId": null,
                                "friendlyName": null,
                                "isPickupStore": false
                            },
                            "polygonName": null,
                            "lockTTL": "12d",
                            "pickupPointId": null,
                            "transitTime": "6bd"
                        }
                    ],
                    "shipsTo": [
                        "BRA"
                    ],
                    "deliveryIds": [
                        {
                            "courierId": "185029e",
                            "courierName": "Correios - PAC",
                            "dockId": "1",
                            "quantity": 1,
                            "warehouseId": "1_1",
                            "accountCarrierName": "axxis"
                        }
                    ],
                    "deliveryChannel": "delivery",
                    "pickupStoreInfo": {
                        "additionalInfo": null,
                        "address": null,
                        "dockId": null,
                        "friendlyName": null,
                        "isPickupStore": false
                    },
                    "addressId": "4885828976232",
                    "polygonName": null,
                    "pickupPointId": null,
                    "transitTime": "11bd"
                }
            ],
            "trackingHints": null,
            "selectedAddresses": [
                {
                    "addressId": "4885828976232",
                    "addressType": "residential",
                    "receiverName": "João Victor  Silva Oliveira",
                    "street": "Rua padre José de anchieta ",
                    "number": "340",
                    "complement": "Casa da Duda ",
                    "neighborhood": "Cristalina-MS",
                    "postalCode": "79944-000",
                    "city": "Cristalina",
                    "state": "MS",
                    "country": "BRA",
                    "reference": null,
                    "geoCoordinates": [
                        -54.7601203918457,
                        -22.49483871459961
                    ]
                }
            ]
        },
        "paymentData": {
            "giftCards": [],
            "transactions": [
                {
                    "isActive": true,
                    "transactionId": "FBB02805EB9C4E299CCFF10DEF2BDB68",
                    "merchantName": "AXXIS",
                    "payments": [
                        {
                            "id": "78D85B736A8D4D71B0D7A912BC5D7B9F",
                            "paymentSystem": "4",
                            "paymentSystemName": "Mastercard",
                            "value": 13800,
                            "installments": 8,
                            "referenceValue": 13800,
                            "cardHolder": null,
                            "cardNumber": null,
                            "firstDigits": "512682",
                            "lastDigits": "9244",
                            "cvv2": null,
                            "expireMonth": null,
                            "expireYear": null,
                            "url": null,
                            "giftCardId": null,
                            "giftCardName": null,
                            "giftCardCaption": null,
                            "redemptionCode": null,
                            "group": "creditCard",
                            "tid": "366632073",
                            "dueDate": null,
                            "connectorResponses": {
                                "Tid": "366632073",
                                "ReturnCode": null,
                                "Message": null,
                                "authId": "315965",
                                "nsu": "366632073",
                                "acquirer": "pagarme"
                            },
                            "giftCardProvider": null,
                            "giftCardAsDiscount": null,
                            "koinUrl": null,
                            "accountId": "C79168CC644742ED8E597A5B40C0D4FA",
                            "parentAccountId": null,
                            "bankIssuedInvoiceIdentificationNumber": null,
                            "bankIssuedInvoiceIdentificationNumberFormatted": null,
                            "bankIssuedInvoiceBarCodeNumber": null,
                            "bankIssuedInvoiceBarCodeType": null,
                            "billingAddress": {
                                "postalCode": "79944-000",
                                "city": "Cristalina",
                                "state": "MS",
                                "country": "BRA",
                                "street": "Rua padre José de anchieta ",
                                "number": "340",
                                "neighborhood": "Cristalina-MS",
                                "complement": "Casa da Duda ",
                                "reference": null,
                                "geoCoordinates": [
                                    -54.7601203918457,
                                    -22.49483871459961
                                ]
                            }
                        },
                        {
                            "id": "814C5FDCA6E5453AA479C26B982DC671",
                            "paymentSystem": "4",
                            "paymentSystemName": "Mastercard",
                            "value": 41100,
                            "installments": 8,
                            "referenceValue": 41100,
                            "cardHolder": null,
                            "cardNumber": null,
                            "firstDigits": "550209",
                            "lastDigits": "9518",
                            "cvv2": null,
                            "expireMonth": null,
                            "expireYear": null,
                            "url": null,
                            "giftCardId": null,
                            "giftCardName": null,
                            "giftCardCaption": null,
                            "redemptionCode": null,
                            "group": "creditCard",
                            "tid": "366632100",
                            "dueDate": null,
                            "connectorResponses": {
                                "Tid": "366632100",
                                "ReturnCode": null,
                                "Message": null,
                                "authId": "111600",
                                "nsu": "366632100",
                                "acquirer": "pagarme"
                            },
                            "giftCardProvider": null,
                            "giftCardAsDiscount": null,
                            "koinUrl": null,
                            "accountId": "AEC8349D1C6B4317A8CF1DB901C98FA4",
                            "parentAccountId": null,
                            "bankIssuedInvoiceIdentificationNumber": null,
                            "bankIssuedInvoiceIdentificationNumberFormatted": null,
                            "bankIssuedInvoiceBarCodeNumber": null,
                            "bankIssuedInvoiceBarCodeType": null,
                            "billingAddress": {
                                "postalCode": "79944-000",
                                "city": "Cristalina",
                                "state": "MS",
                                "country": "BRA",
                                "street": "Rua padre José de anchieta ",
                                "number": "340",
                                "neighborhood": "Cristalina-MS",
                                "complement": "Casa da Duda ",
                                "reference": null,
                                "geoCoordinates": [
                                    -54.7601203918457,
                                    -22.49483871459961
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        "packageAttachment": {
            "packages": []
        },
        "sellers": [
            {
                "id": "1",
                "name": "AXXIS e MT HELMETS",
                "logo": "",
                "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?sc=1&an=axxis"
            }
        ],
        "callCenterOperatorData": null,
        "followUpEmail": "82d5edf15faf460abd58a121911a4027@ct.vtex.com.br",
        "lastMessage": null,
        "hostname": "axxis",
        "invoiceData": null,
        "changesAttachment": null,
        "openTextField": null,
        "roundingError": 0,
        "orderFormId": "87ef0c768729466d8fdbeb92f8120efe",
        "commercialConditionData": null,
        "isCompleted": true,
        "customData": null,
        "storePreferencesData": {
            "countryCode": "BRA",
            "currencyCode": "BRL",
            "currencyFormatInfo": {
                "CurrencyDecimalDigits": 2,
                "CurrencyDecimalSeparator": ",",
                "CurrencyGroupSeparator": ".",
                "CurrencyGroupSize": 3,
                "StartsWithCurrencySymbol": true
            },
            "currencyLocale": 1046,
            "currencySymbol": "R$",
            "timeZone": "E. South America Standard Time"
        },
        "allowCancellation": true,
        "allowEdition": false,
        "isCheckedIn": false,
        "marketplace": {
            "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=axxis",
            "isCertified": null,
            "name": "axxis"
        },
        "authorizedDate": "2021-08-12T11:01:29.5289717+00:00",
        "invoicedDate": null,
        "cancelReason": null,
        "itemMetadata": {
            "Items": [
                {
                    "Id": "897",
                    "Seller": "1",
                    "Name": "CAPACETE AXXIS DRAKEN VECTOR MATT BLACK/RED/GOLD 60/L",
                    "SkuName": "CAPACETE AXXIS DRAKEN VECTOR MATT BLACK/RED/GOLD 60/L",
                    "ProductId": "29",
                    "RefId": "601009056",
                    "Ean": "7908328519590",
                    "ImageUrl": "http://axxis.vteximg.com.br/arquivos/ids/158589-80-80/601009056.jpg?v=637594629340200000",
                    "DetailUrl": "/601009/p",
                    "AssemblyOptions": []
                }
            ]
        },
        "subscriptionData": null,
        "taxData": null,
        "checkedInPickupPointId": null,
        "cancellationData": null
    },
    "responseHeaders": {
        "cache-control": "no-store, must-revalidate, no-cache",
        "content-type": "application/json; charset=utf-8",
        "date": "Mon, 16 Aug 2021 11:21:49 GMT",
        "pragma": "no-store,no-cache",
        "set-cookie": [
            "janus_sid=14bf23e3-d091-4c31-b44a-7830dd32fef3; expires=Thu, 19 Aug 2021 11:21:38 GMT; domain=axxis.vtexcommercestable.com.br; path=/; samesite=lax"
        ],
        "x-vtex-janus-router-backend-app": "omsapi-v1.75.1+2497",
        "x-vtex-operation-id": "f60d1d2e-14f3-458a-8606-2f73630bc6c0",
        "content-length": "9288",
        "connection": "keep-alive"
    },
    "statusCode": 200
}

const dt = (bSellerOrder, orderDetails) => {
    const trackingOrder = bSellerOrder.codigosRastreio.pop();

    const obj = {
        'orderId': orderDetails.body.orderId,
        'invoiceNumber': bSellerOrder.notaFiscal.serie,
        'invoiceKey': bSellerOrder.notaFiscal.chaveAcesso,
        'issuanceDate': bSellerOrder.notaFiscal.dataEmissao,
        'trackingNumber': trackingOrder,
        'invoiceValue': orderDetails.body.value,
        'invoiceUrl': bSellerOrder.notaFiscal.linkNfe,
        'items': orderDetails.body.items.map(item => {
            return {
                "id": item.id,
                "quantity": item.quantity,
                "price": item.price,
            }
        }),
        'courier': bSellerOrder ? bSellerOrder.transportadora.nome : 'Conthey',
        'type': 'Output'
    }

    console.log(obj)
}

dt(bSellerOrder, orderDetails)