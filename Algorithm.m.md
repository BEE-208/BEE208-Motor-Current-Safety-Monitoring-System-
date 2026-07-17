# **<u>ALGORITHM</u>** 

Algorithm for the Motor Current Safety Monitoring System 

1. Start the program. 

2. Display the project title: “MOTOR CURRENT SAFETY MONITORING SYSTEM”. 

3. Ask the user to enter the number of motors to be checked. 

4. Initialize the following variables: 

   - Safe Motor = 0 

   - Overloaded Motor = 0 

5. Repeat the following steps for each motor: 

   - Enter the motor name or ID. 

   - Enter the rated current. 

   - Enter the measured current. 

6. Validate the inputs: 

   - If the rated current is less than 0 OR 

   - If the measured current is less than 0 

      - Display “Invalid Current Value”. 

      - Skip the calculation for that motor and continue to the next motor. 

7. Calculate the current difference: 

   - Formula: Current Difference = Measured Current – Rated Current 

8. Compare the measured current with the rated current. 

   - If Measured Current ≤ Rated Current 

      - Display Safe Operation 

      - Increase safe Motors by 1 

   - Otherwise 

      - Display Overload Warning 

      - Increase overloaded Motor by 1. 

9. Display the motor report showing: 

   - Motor Name 

   - Rated Current 

   - Measured Current 

   - Current Difference 

   - Status 

10. Save the report into motor_current_report.txt 

11. After all motors have been processed, display 

   - Total Motors 

   - Safe Motors 

   - Overloaded Motors 

12. Display: “Report Successfully Saved.” 

13. Stop the program. 

