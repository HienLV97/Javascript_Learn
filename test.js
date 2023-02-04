{
    "rules": [
        {
            "target": "ltb_tiny",
            "content": [
                {
                    "item": "res_gold",
                    "chance": 100,
                    "values": {
                        "amount": "@random(1,20)"
                    }
                },
                {
                    "item": "res_diamond",
                    "chance": 30,
                    "values": {
                        "amount": 1
                    }
                },
                {
                    "items": [
                        "abc_speedster",
                        "abc_refill"
                    ],
                    "chance": 30,
                    "values": {
                        "count": "@random(1,2)"
                    }
                }
            ]
        },
        {
            "target": "ltb_small",
            "content": [
                {
                    "item": "res_gold",
                    "chance": 100,
                    "values": {
                        "amount": "@random(5,50)"
                    }
                },
                {
                    "item": "res_diamond",
                    "chance": 80,
                    "values": {
                        "amount": "@random(1,3)"
                    }
                },
                {
                    "items": [
                        "abc_speedster",
                        "abc_boost",
                        "abc_refill",
                        "abc_shield",
                        "abc_magnet"
                    ],
                    "chance": 30,
                    "values": {
                        "count": "@random(1,5)"
                    }
                }
            ]
        },
        {
            "target": "ltb_medium",
            "content": [
                {
                    "item": "res_gold",
                    "chance": 100,
                    "values": {
                        "amount": "@random(10,100)"
                    }
                },
                {
                    "item": "res_diamond",
                    "chance": 100,
                    "values": {
                        "amount": "@random(1,5)"
                    }
                },
                {
                    "items": [
                        "abc_speedster",
                        "abc_boost",
                        "abc_refill",
                        "abc_shield",
                        "abc_blades_x2",
                        "abc_income_x2",
                        "abc_magnet",
                        "abc_shock"
                    ],
                    "chance": 30,
                    "values": {
                        "count": "@random(1,10)"
                    }
                },
                {
                    "group": "skin",
                    "chance": 40
                },
                {
                    "group": "avatar",
                    "chance": 40
                }
            ]
        },
        {
            "target": "ltb_large",
            "content": [
                {
                    "item": "res_gold",
                    "chance": 100,
                    "values": {
                        "amount": "@random(20,150)"
                    }
                },
                {
                    "item": "res_diamond",
                    "chance": 100,
                    "values": {
                        "amount": "@random(3,7)"
                    }
                },
                {
                    "items": [
                        "abc_speedster",
                        "abc_boost",
                        "abc_refill",
                        "abc_shield",
                        "abc_blades_x2",
                        "abc_income_x2",
                        "abc_debuff",
                        "abc_self_debuff",
                        "abc_magnet",
                        "abc_shock"
                    ],
                    "chance": 30,
                    "values": {
                        "count": "@random(1,15)"
                    }
                },
                {
                    "repeat": 2,
                    "group": "skin",
                    "chance": 40
                },
                {
                    "repeat": 2,
                    "group": "avatar",
                    "chance": 40
                }
            ]
        },
        {
            "target": "ltb_huge",
            "content": [
                {
                    "item": "res_gold",
                    "chance": 100,
                    "values": {
                        "amount": "@random(50,300)"
                    }
                },
                {
                    "item": "res_diamond",
                    "chance": 100,
                    "values": {
                        "amount": "@random(5,12)"
                    }
                },
                {
                    "items": [
                        "abc_speedster",
                        "abc_boost",
                        "abc_refill",
                        "abc_shield",
                        "abc_blades_x2",
                        "abc_blades_x3",
                        "abc_income_x2",
                        "abc_income_x3",
                        "abc_bomb",
                        "abc_debuff",
                        "abc_self_debuff",
                        "abc_magnet",
                        "abc_shock"
                    ],
                    "chance": 30,
                    "values": {
                        "count": "@random(1,20)"
                    }
                },
                {
                    "repeat": 3,
                    "group": "skin",
                    "chance": 40
                },
                {
                    "repeat": 3,
                    "group": "avatar",
                    "chance": 40
                }
            ]
        },
        {
            "target": "ltb_epic",
            "content": [
                {
                    "item": "res_gold",
                    "chance": 100,
                    "values": {
                        "amount": "@random(100,550)"
                    }
                },
                {
                    "item": "res_diamond",
                    "chance": 100,
                    "values": {
                        "amount": "@random(10,20)"
                    }
                },
                {
                    "items": [
                        "abc_speedster",
                        "abc_boost",
                        "abc_refill",
                        "abc_shield",
                        "abc_blades_x2",
                        "abc_blades_x3",
                        "abc_income_x2",
                        "abc_income_x3",
                        "abc_bomb",
                        "abc_debuff",
                        "abc_self_debuff",
                        "abc_magnet",
                        "abc_shock"
                    ],
                    "chance": 30,
                    "values": {
                        "count": "@random(1,25)"
                    }
                },
                {
                    "repeat": 4,
                    "group": "skin",
                    "chance": 40
                },
                {
                    "repeat": 4,
                    "group": "avatar",
                    "chance": 40
                }
            ]
        },
        {
            "target": "ltb_ultimate",
            "content": [
                {
                    "item": "res_gold",
                    "chance": 100,
                    "values": {
                        "amount": "@random(150,1000)"
                    }
                },
                {
                    "item": "res_diamond",
                    "chance": 100,
                    "values": {
                        "amount": "@random(15,30)"
                    }
                },
                {
                    "items": [
                        "abc_speedster",
                        "abc_boost",
                        "abc_refill",
                        "abc_shield",
                        "abc_blades_x2",
                        "abc_blades_x3",
                        "abc_income_x2",
                        "abc_income_x3",
                        "abc_bomb",
                        "abc_debuff",
                        "abc_self_debuff",
                        "abc_magnet",
                        "abc_shock"
                    ],
                    "chance": 30,
                    "values": {
                        "count": "@random(1,30)"
                    }
                },
                {
                    "repeat": 5,
                    "group": "skin",
                    "chance": 40
                },
                {
                    "repeat": 5,
                    "group": "avatar",
                    "chance": 40
                }
            ]
        }
    ]
}