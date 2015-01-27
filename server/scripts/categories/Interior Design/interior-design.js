module.exports = function(parentId) {
  return {
    name: 'Interior design',
    route: 'interior-design',
    search_keywords: ['interior' , 'design', 'designer', 'interior design', 'Kitchen', 'space', 'space planning'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 5,
    actor: 'interior designer',
    actor_plural: 'interior designers',
    action: 'help you design the perfect space',
    questions: [
      {
        field_type: "checklist",
        questions: "What services do you?",
        description: "Services needed",
        choices: [
          {
            label: "Layout and space planning",
            value: "Layout and space planning"
          },
          {
            label: "Paint selection",
            value: "Paint selection"
          },
          {
            label: "Furniture",
            value: "Furniture"
          },
          {
            label: "Lighting",
            value: "Lighting"
          },
          {
            label: "Flooring",
            value: "Flooring"
          },
          {
            can_describe: true
          }


        ]
      },
      {
        field_type: "checklist",
        questions: "What spaces need improvement?",
        description: "Spaces that need improvement ",
        choices: [
          {
            label: "Office or shop",
            value: "Office or shop"
          },
          {
            label: "Home office",
            value: "Home office"
          },
          {
            label: "Bathroom(s)",
            value: "Bathroom(s)"
          },
          {
            label: "Hallway",
            value: "Hallway"
          },
          {
            label: "Bedroom(s)",
            value: "Bedroom(s)"
          },
          {
            label: "Kitchen",
            value: "Kitchen"
          },
          {
            label: "Family room",
            value: "Family room"
          },
          {
            label: "Living room",
            value: "Living room"
          },
          {
            label: "My apartment",
            value: "My apartment"
          },
          {
            can_describe: true
          }
        ]
      },
      {
        field_type: "select",
        question: "What is the approximate square footage of the area that needs cleaning?",
        description: "Approximate square footage of the area that needs cleaning",
        choices: [
          {
            label: "Less than 500",
            value: "Less than 500"
          },
          {
            label: "501 to 1000",
            value: "501 to 1000"
          },
          {
            label: "1001 to 1500",
            value: "1501 to 2000"
          },
          {
            label: "More than 2000",
            value: "More than 2000"
          }
        ]
      },
      {
        field_type: "select",
        question: "What is your approximate budget?",
        description: "Approximate budget",
        choices: [
          {
            label: "$3,000 to $5,000",
            value: "$3,000 to $5,000"
          },
          {
            label: "$5,000 to $10,000",
            value: "$5,000 to $10,000 "
          },
          {
            label: "$10,000 to $20,000",
            value: "$10,000 to $20,000"
          },
          {
            label: "$More than $20,000",
            value: "$More than $20,000"
          }

        ]
      }
    ]
  };
};