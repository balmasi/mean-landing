module.exports = function(parentId) {
  return{
        name: 'Appliance Repair',
        route: 'appliance-repair',
        search_keywords: [ 'Appliance', 'appliance repair','washer repair','Refrigerator repair','Oven repair','Dishwasher repair','Vacuum cleaner repair','app','appli','applia','applian','applianc'],
        parent: parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 2,
        actor: 'Appliance Professional',
        actor_plural: 'Appliance Professionals',
        action: 'help you repair an appliance',
        questions: [
        {
                 field_type:"checklist",
                question: "What appliances are you repairing?",
                description: "Which appliances",
                choices:[
                
                {
                        label:"Dryer",
                        value:"Dryer"
                },
                {
                        label:"Oven/Stove",
                        value:"Oven/Stove"
                },
                {
                        label:"Dishwasher",
                        value:"Dishwasher"
                },
                
                {
                        label:"Refrigerator",
                        value:"Refrigerator"
                },
                {
                        label:"Washing machine",
                        value:"Washing machine"
                },
                {
                        can_describe: true

                }

                ]
        },
        {
                field_type:"Select",
                question: "Are there items to be moved?",
                description: "If there are items to be moved or not ",
                choices:[
                {
                        label:"Yes",
                        value:"Yes"
                },
                {
                        label:"No",
                        value:"No"
                },
                
                {
                        can_describe: true
                        
                }

                ]
        }
        ]
    };
};