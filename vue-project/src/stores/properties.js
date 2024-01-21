import { defineStore } from 'pinia'
import { properties } from '@/data.json'

export const useProperties = defineStore('property', {
  state: () => ({
    properties: properties
  }),

  getters: {
    getPropertyById: (state) => {
        return (propertyId) => state.properties.find(p => p.id == propertyId)
    }
  }
})
