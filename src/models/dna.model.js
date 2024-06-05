import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/database/index.js';
import { UUIDV4 } from 'sequelize';

export const Dna = sequelize.define(
  'dna',
  {
    dnaId: {
      type: DataTypes.STRING(36),
      defaultValue: UUIDV4(),
      allowNull: false,
      field: 'dna_id',
      primaryKey: true,
    },
    dna: {
      type: DataTypes.JSONB,
      allowNull: false,
      unique: true,
    },
    IsMutant: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_mutant'
      },
  },
  {
    // Other model options go here
  },
);
