export interface IExercise {
  id?: number;
  /**
   * The display name of this exercise
   */
  displayName: string;

  /**
   * The name of the equipment this exercise uses
   */
  equipment: string;

  /**
   * An image of this exercise
   */
  image?: string;
}
