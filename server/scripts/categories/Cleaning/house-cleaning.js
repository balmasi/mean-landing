module.exports = function(parentId) {
  return{
        name: 'House cleaning',
        route: 'house-cleaning',
        search_keywords: ['House','cleaning', 'housecleaning', 'maid service','maid','cleaning lady','hous','clea'],
        parent: parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 2,
        actor: 'Cleaner',
        actor_plural: 'Cleaners',
        action: 'Help you keep your home clean',
        questions: [
        {
                field_type:"select",
                description:"Customer requires services for",
                question: "How often do you need services?",
               choices:[
                {     
            label:'One time light cleaning',
            value:'One time light cleaning'
                },
          {
            label:"One time deep cleaning",
            value:"One time deep cleaning"
          },

          {
            label:"Weekly",
            value:"Weekly"
          },
           {
            label:"Twice a week",
            value:"Twice a week"
          },
           {
            label:"Every other week",
            value:"Every other week"
          },
           {
            label:"Monthly",
            value:"Monthly"
          },
           {
            label:"I am not sure",
            value:"Customer is not sure and needs your advice"
          },

          
          ]

        },
        {
                field_type:"select",
                description:"Type of property",
                question:"What type of home do you live in?",
                choices:[
                {
                        label:"Condo/appartment unit",
                        value:"Condo/appartment unit"
                },
                {
                        label:"One-story house",
                        value"One-story house"
                },
                {
                        label:"Two-story house",
                        value:"Two-story house"
                },
                {
                        label:"Other",
                        value:"Other"
                }


                ]
        },
        {
          field_type: "select",
          description: "The number of bathroom(s) to be cleaned",
          question: "How many bathroom(s) need cleaning?",
          choices:[
          {
            label:"Just one",
            value:"Just one bathroom"
          },
          {

            label:"Two bathrooms",
            value:"Two bathrooms"
          },
          {
            label: "Three bathrooms",
            value: "Three bathrooms"
          },
          {
            label: "Four bathrooms",
            value: "Four bathrooms"
          },
          {
            label: "Five or more",
            value: "Five or more bathrooms"
          }
          ]

        },
        {
          field_type:"select",
          question:"Will you provide all the equipments and supplies?",
          description:"Customer will supply all the equipments or not",
          choices:[ 
           {
            label: "Yes",
            value:"Yes, customer will provide all the equipments and supplies"
          },
          {
            label:"No",
            value:"No, customer wants you to bring your own equipments and supplies"
          }
          ]



        },
        {
          field_type:'text',
          description:"Approximate square footage of the area to be cleaned",
          question:" what is the approximate square footage of the area to be cleaned?"


        },
        {
                field_type:'checklist',
                question: "what else should cleaner know?",
                description:"Other things customer wants you to know"
                choices:[
                {
                        label:"I want eco-friendly products",
                        value:"Customer wants eco-friendly products to be used"
                },
                {
                        label:"I want laundry",
                        value:"Customer wants you to do the laundry"
                },
                {
                        label:"I have a pet",
                        value:"Customer has a pet"
                },
                {
                        label:"I want my refrigerator cleaned",
                        value:"Customer needs refrigerator cleaning"
                },
                {
                        label:"I want my windows cleaned",
                        value:"Customer needs his/her windows cleaned"
                }
                ]
              }
              ]
        };
};