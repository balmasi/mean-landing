module.exports = function(parentId) {
  return{
    name: 'Commercial Cleaning',
    route: 'commercial-cleaning',
    search_keywords: ['cleaning','commercial', 'business', 'clean', 'office', 'commercial estate', 'cleaning service'],
    parent:  parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Cleaner',
    actor_plural: 'Cleaners',
    action: 'Help you keep your business clean',
    questions:  [
      {
        field_type:'select',
        description:'Commercial property type',
        question:'What kind of commercial property do you have?',
        choices:[
          {
            label:"Office",
            value:"office"

          },
          {
            label:"Warehouse",
            value:"Warehouse"
          },
          {
            label:"Medical facility",
            value:"Medical facility"
          },
          {
            label:"Factory",
            value:"Factory"
          },
          {
            label:"Residential complex",
            value:"Residential Complex"
          },
          {
            label:"Restaurant",
            value:"Restaurant"
          }

        ]

      },
      {
        field_type:'select',
        description: "Customer requires the service for",
        question:"How often do you need the service?",
        choices:[
          {
            label:'Just once',
            value:'Just Once'
          },
          {
            label:"Just once a week",
            value:"Once a week"
          },
          {
            label:"More than once a week",
            value:"More than once a week"
          }
        ]
      },
      {
        field_type:"select",
        question:"What is the approximate square footage of the area that needs cleaning?",
        description:"Approximate square footage of the area that needs cleaning",
        choices:[
          {
            label:"Less than 500",
            value: "Less than 500"
          },
          {
            label:"501 to 1000",
            value:"501 to 1000"
          },
          {
            label:"1001 to 1500",
            value:"1501 to 2000"
          },
          {
            label:"more than 2000",
            value:"more than 2000"
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
            label: "More than four bathrooms",
            value: "More than four bathrooms"
          }
        ]

      },
      {
        field_type: 'text',
        question:"How windows do you need to be cleaned?",
        description:"The number of windows to be cleaned"
      },
      {
        field_type:"select",
        question:"Will the building be occupied during the cleaning?",
        description:"Will the building be occupied during the cleaning?",
        choices:[
          {
            label: "Yes",
            value:"Yes"
          },
          {
            label:"No",
            value:"No"
          }
        ]
      },
      {
        field_type:"select",
        question:"Will you provide all the equipments and supplies?",
        description: "Who provides materials and parts",
        choices:[
          {
            label:"Yes, I will provide the materials and parts",
            value:"Customer provides all the materials and parts"
          },
          {
            label:"No",
            value:"Customer wants you to supply parts and materials"
          }
        ]
      }
    ]
  };
};

