module.exports = function(parentId) {
  return {
    name: 'Roof Repair and Maintenance',
    route: 'Roofing-repair-and-Maintenance',
    search_keywords: ['Roofing' , 'roofer', 'Roof', 'Roof repair', 'roof Maintenance'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 3,
    actor: 'Roofer',
    actor_plural: 'Roofers',
    action: 'fix your roof',
    questions: [
      {
        field_type: "checklist",
        question: "What roof problems do you need repaired?",
        description: "Roof problems",
        choices: [
          {
            label: "Leaks/Water damage",
            value: "Leaks/Water damage"
          },
          {
            label: 'Missing/Damaged Shingles',
            value: "Missing/Damaged Shingles"
          },
          {
            label: "Rotted wood",
            value: "Rotted wood"
          },
          {
            label: "Waves",
            value: "Waves"
          },
          {
            label: "Sagging roof",
            value: "Sagging roof"
          },
          {
            label: "Flashing issues",
            value: "Flashing issues"
          },
          {
            label: "Routine cleaning",
            value: "Routine cleaning"
          }
        ]
      },
      {
        field_type: "select",
        question: "What material is your roof?",
        description: "Roof material",
        choices: [
          {
            label: "Asphalt shingles",
            value: "Asphalt shingles"
          },
          {
            label: "Wood shingles",
            value: "Wood shingles"
          },
          {
            label: "Slate",
            value: "Slate"

          },
          {
            label: "Clay/Concrete",
            value: "Clay/Concrete"
          },
          {
            label: "Metal",
            value: "Metal"
          },
          {
            label: "I am not sure",
            value: "Customer is not sure"
          }
        ]
      },
      {
        field_type: "select",
        question: "How old is the current roof in years?",
        description: "The approximate age of roof in years",
        choices: [
          {
            label: "0-10",
            value: "0-10"
          },
          {
            label: "11-20",
            value: "11-20"
          },
          {
            label: "21-30",
            value: "21-30"
          },
          {
            label: "31-40",
            value: "31-40"
          },
          {
            label: "More than 40",
            value: "More than 40"
          },
          {
            label: "I am not sure",
            value: "Customer is not sure"
          }
        ]
      },
      {
        field_type: "select",
        question: 'How steep is your roof?',
        description: "Steepness of roof",
        choices: [
          {
            label: "All flat",
            value: "All flat"
          },
          {
            label: "Some parts steep, some parts flat",
            value: "Some parts steep, some parts flat"
          },
          {
            label: "All steep",
            value: "All steep"
          }
        ]
      },
      {
        field_type: "select",
        question: "Do you have an insurance claim on this job?",
        description: "Insurance claim",
        choice: [
          {
            label: "Yes",
            value: "Yes"
          },
          {
            label: "No",
            value: "No"
          }
        ]
      },
      {
        field_type: "select",
        question: "Will you supply the materials and parts?",
        description: "Who supplies the materials and parts",
        choices: [
          {
            label: "Yes, I will provide the materials and parts",
            value: "Customer will provide the materials and parts"
          },
          {
            label: "Yes, but I will need guidance from the professional",
            value: "Customer will provide parts and material but needs your guidance"
          },
          {
            label: "No, I want the professional to supply the parts",
            value: "Customer wants you to supply the parts"
          }
        ]
      },
      {
        field_type: "select",
        question: "What type of property do you have?",
        description: "Type of property",
        choices: [
          {
            label: "Single level house",
            value: "Single level house"
          },
          {
            label: "Two stories house",
            value: "Two stories house"
          },

          {
            label: "Multi unit building",
            value: "Multi unit building"
          },
          {
            label: "Office/business",
            value: "Office/business"
          },
          {
            label: "Commercial",
            value: "Commercial"
          }
        ]
      }
    ]
  };
};