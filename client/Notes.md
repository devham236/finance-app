## Next Steps

- Mach erstmal alle Grid-Items fertig, das heißt die "Trends", "Income and Expenses monthly" und "Goals".
- Dann musst du eine Datenbank bzw. ein Cluster in MongoDB aufstellen und die Daten dort speichern
- Erstell am besten ein Schema für "Incomes" und "Expenses", in der jedes object die Id des current users als property bekommt.
- Das bedeutet du musst neue thunks für Income und Expenses erstellen, die dann mit dem backend kommunizieren und die responses in den states speichern.

# Project Roadmap

## Next Steps

1. **Finish Features**
   - [ ] Task 1 (Finish all features inside the Grid-Items --> "Trends", "Income and Expenses monthly" and "Goals")
   - [ ] Task 2 ()
   - [ ] Task 3 (e.g., Implementing the chart component)
2. **Backend - Database Connection**

   - [ ] Set up MongoDB database
   - [ ] Create backend API for create, update, delete operations
   - [ ] Connect frontend to backend API

3. **Frontend Styling & Animations**

   - [ ] Add responsive styles using Tailwind CSS
   - [ ] Implement smooth transitions and animations for components
   - [ ] Improve overall UI consistency

4. **Code Optimization**
   - [ ] Review and refactor code for readability and performance
   - [ ] Optimize Redux store and reducers
   - [ ] Clean up unused components and code

## Notes & Explanations

### Feature: User Authentication

- **Why Firebase in Backend:** Keeping Firebase only in the backend centralizes authentication logic and improves security.
- **Google Sign-In:** I implemented Google sign-in using `thunks` and Redux to manage the state on the frontend.

### Feature: Database Integration

- **Why MongoDB:** Using MongoDB allows flexible, document-based storage and easy scaling.

### Styling

- **Tailwind CSS:** I use Tailwind CSS for utility-first styling to rapidly build the UI while keeping the CSS manageable.
