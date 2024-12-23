const questions = [
    // Round 1
    [
        {
            question: "What is the determinant of the matrix [2, 3; 1, 4]?",
            options: ["5", "4", "1", "6"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 4, 5, 6; 7, 8, 9]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 2; 3, 4]?",
            options: ["[ -2, 1; 1.5, -0.5 ]", "[ -2, -1; -1.5, 0.5 ]", "[ 2, -1; -1.5, 0.5 ]", "[ -2, 1; -3, 4 ]"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [4, 1; 2, 3]?",
            options: ["5, 2", "6, 1", "4, 3", "3, 2"],
            correct: 0,
        },
        {
            question: "If a vector v = [3, -2], what is the magnitude of v?",
            options: ["√13", "√10", "√8", "√12"],
            correct: 0,
        },
    ],

    // Round 2
    [
        {
            question: "What is the dot product of the vectors [1, 2, 3] and [4, 5, 6]?",
            options: ["32", "30", "28", "26"],
            correct: 0,
        },
        {
            question: "If A = [2, 3; 1, 4] and B = [1, 2; 3, 4], what is the matrix product A * B?",
            options: ["[11, 16; 14, 22]", "[8, 14; 10, 16]", "[7, 12; 8, 14]", "[9, 15; 11, 18]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2; 3, 4; 5, 6]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [1, 0, 0] and [0, 1, 0]?",
            options: ["[0, 0, 1]", "[1, 1, 0]", "[0, 1, 1]", "[0, 0, 0]"],
            correct: 0,
        },
        {
            question: "What is the trace of the matrix [2, 3; 4, 5]?",
            options: ["7", "8", "6", "9"],
            correct: 0,
        },
    ],

    // Round 3
    [
        {
            question: "What is the solution to the system of equations: x + y = 6 and x - y = 2?",
            options: ["(4, 2)", "(3, 3)", "(5, 1)", "(2, 4)"],
            correct: 0,
        },
        {
            question: "Which of the following matrices is orthogonal?",
            options: ["[1, 0; 0, 1]", "[1, 2; 3, 4]", "[2, 3; 1, 5]", "[3, 5; 4, 7]"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [1, 2, 3; 0, 1, 4; 5, 6, 0]?",
            options: ["-18", "0", "18", "-12"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [2, 0; 0, 5]?",
            options: ["5", "2", "0", "7"],
            correct: 0,
        },
        {
            question: "What is the magnitude of the vector [4, -3, 0]?",
            options: ["5", "6", "7", "8"],
            correct: 0,
        },
    ],
   // Round 4
    [
        {
            question: "What is the eigenvector corresponding to the eigenvalue 2 for the matrix [4, 1; 2, 3]?",
            options: ["[1, 1]", "[1, -1]", "[2, 1]", "[3, 2]"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: 2x + 3y = 5 and 4x - y = 7?",
            options: ["(2, 1)", "(1, 2)", "(3, 1)", "(2, 3)"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 2; 3, 4]?",
            options: ["[ -2, 1; 1.5, -0.5 ]", "[ -2, -1; -1.5, 0.5 ]", "[ 2, -1; -1.5, 0.5 ]", "[ -2, 1; -3, 4 ]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 0, 3; 2, 1, 4; 0, 1, 5]?",
            options: ["1", "2", "3", "0"],
            correct: 1,
        },
        {
            question: "What is the determinant of the matrix [2, 3, 1; 4, 1, 6; 7, 8, 5]?",
            options: ["-25", "-26", "-24", "25"],
            correct: 0,
        },
    ],

    // Round 5
    [
        {
            question: "What is the dot product of the vectors [1, -2, 3] and [-4, 5, 6]?",
            options: ["32", "27", "29", "31"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2; 3, 4; 5, 6]?",
            options: ["1", "2", "3", "0"],
            correct: 1,
        },
        {
            question: "Which matrix is the inverse of [2, 1; 1, 2]?",
            options: ["[0.5, -0.25; -0.25, 0.5]", "[0.5, 0.25; 0.25, 0.5]", "[1, 2; 2, 1]", "[2, 1; 1, 2]"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [2, 3, 4] and [5, 6, 7]?",
            options: ["[-1, 2, -1]", "[2, 2, 2]", "[2, -2, 1]", "[5, 5, 5]"],
            correct: 0,
        },
        {
            question: "If v = [2, -1, 3] and w = [1, 4, -2], what is the angle between the two vectors?",
            options: ["45°", "60°", "90°", "120°"],
            correct: 0,
        },
    ],

    // Round 6
    [
        {
            question: "What is the determinant of the matrix [3, 2; 1, 4]?",
            options: ["10", "11", "12", "7"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 0; 0, 1]?",
            options: ["[1, 0; 0, 1]", "[0, 1; 1, 0]", "[0, 0; 1, 1]", "[1, 1; 1, 1]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [2, 1, 3; 4, 2, 6; 1, 0, 1]?",
            options: ["1", "2", "3", "0"],
            correct: 1,
        },
        {
            question: "What is the cross product of the vectors [3, -3, 2] and [4, 9, 1]?",
            options: ["[35, 10, 39]", "[12, 7, 45]", "[15, -10, -39]", "[10, 7, 12]"],
            correct: 0,
        },
        {
            question: "If matrix A = [1, 2; 3, 4] and matrix B = [2, 0; 1, 2], what is the product A * B?",
            options: ["[4, 4; 10, 8]", "[4, 2; 7, 8]", "[5, 2; 9, 8]", "[4, 1; 8, 6]"],
            correct: 0,
        },
    ],
  // Round 7
    [
        {
            question: "What is the eigenvalue of the matrix [1, 2; 2, 1]?",
            options: ["3, -1", "2, 1", "1, 3", "1, -1"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [2, 1, 3; 4, 5, 6; 1, 1, 1]?",
            options: ["1", "2", "3", "0"],
            correct: 1,
        },
        {
            question: "What is the determinant of the matrix [1, 3, 2; 4, 0, 1; 5, 7, 2]?",
            options: ["-16", "-14", "-18", "-10"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [1, 2, 3] and [4, 5, 6]?",
            options: ["[-3, 6, -3]", "[2, -3, 6]", "[1, -2, 3]", "[0, 0, 0]"],
            correct: 0,
        },
        {
            question: "If a vector v = [3, -4], what is the magnitude of v?",
            options: ["5", "6", "7", "8"],
            correct: 0,
        },
    ],

    // Round 8
    [
        {
            question: "What is the inverse of the matrix [3, 2; 1, 4]?",
            options: ["[0.5, -0.25; -0.25, 0.75]", "[0.25, 0.75; -0.5, 0.5]", "[0.75, -0.5; -0.25, 0.5]", "[0.5, -0.25; 0.25, 0.75]"],
            correct: 0,
        },
        {
            question: "What is the trace of the matrix [1, 2, 3; 4, 5, 6; 7, 8, 9]?",
            options: ["15", "12", "16", "18"],
            correct: 0,
        },
        {
            question: "What is the dot product of the vectors [2, 0, 1] and [1, 3, 4]?",
            options: ["9", "8", "7", "6"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [3, 1; 4, 2]?",
            options: ["2", "4", "5", "6"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 2, 4, 6; 7, 8, 9]?",
            options: ["1", "2", "3", "0"],
            correct: 1,
        },
    ],

    // Round 9
    [
        {
            question: "What is the inverse of the matrix [5, 2; 1, 3]?",
            options: ["[3, -2; -1, 5]", "[3, -1; -1, 2]", "[3, 1; -1, 5]", "[5, 2; 1, 3]"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [2, 4, 1] and [3, 6, 2]?",
            options: ["[2, -2, 2]", "[4, 2, -2]", "[6, 6, -6]", "[1, -2, 1]"],
            correct: 0,
        },
        {
            question: "What is the eigenvector corresponding to the eigenvalue 3 for the matrix [1, 2; 2, 1]?",
            options: ["[1, 1]", "[1, -1]", "[3, -2]", "[2, 1]"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: x + y = 3 and x - y = 1?",
            options: ["(2, 1)", "(1, 2)", "(0, 3)", "(3, 0)"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [6, 2; 1, 3]?",
            options: ["16", "18", "14", "12"],
            correct: 0,
        },
    ],

    // Round 10
    [
        {
            question: "What is the rank of the matrix [1, 1, 1; 2, 2, 2; 3, 3, 3]?",
            options: ["0", "1", "2", "3"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [4, 1; 2, 3]?",
            options: ["[0.6, -0.2; -0.4, 0.8]", "[0.5, -0.5; -0.5, 1]", "[1, -0.5; -0.5, 1.5]", "[0.8, -0.2; -0.4, 0.6]"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [1, 0, 0] and [0, 1, 0]?",
            options: ["[0, 0, 1]", "[1, 0, 0]", "[0, 1, 0]", "[0, 0, 0]"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [3, 1; 1, 3]?",
            options: ["2, 4", "1, 5", "3, 3", "0, 6"],
            correct: 0,
        },
        {
            question: "What is the magnitude of the vector [3, -4]?",
            options: ["5", "6", "7", "8"],
            correct: 0,
        },
    ],

    // Round 11
    [
        {
            question: "What is the trace of the matrix [1, 2, 3; 4, 5, 6; 7, 8, 9]?",
            options: ["12", "15", "17", "18"],
            correct: 1,
        },
        {
            question: "What is the dot product of the vectors [2, 0, 1] and [1, 3, 4]?",
            options: ["8", "9", "10", "7"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: x + 3y = 5 and 2x - y = 4?",
            options: ["(1, 2)", "(2, 1)", "(3, 2)", "(4, 3)"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [3, 1, 2; 1, 2, 3; 2, 3, 4]?",
            options: ["4", "5", "6", "7"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 0, 1; 1, 2, 3; 0, 1, 4]?",
            options: ["[3, -2, 1; -2, 1, 0; 1, 0, -1]", "[1, 0, -1; -1, 2, 0; 0, -1, 1]", "[3, 1, -2; 0, 4, 1; -1, -2, 3]", "[1, -1, 1; -2, 1, 3; 0, -1, 2]"],
            correct: 0,
        },
    ],
  // Round 12
    [
        {
            question: "What is the determinant of the matrix [1, 3; 4, 2]?",
            options: ["-10", "7", "5", "6"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 1, 1; 2, 2, 2; 3, 3, 3]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [1, 1; 1, 1]?",
            options: ["2, 0", "1, 1", "0, 1", "2, 1"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [2, 1; 1, 2]?",
            options: ["[0.5, -0.25; -0.25, 0.5]", "[0.25, 0.75; -0.5, 0.5]", "[1, 0; 0, 1]", "[0.5, 0.5; 0.5, 0.5]"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [1, 2, 3] and [4, 5, 6]?",
            options: ["[-3, 6, -3]", "[1, 1, 1]", "[2, -3, 6]", "[0, 0, 0]"],
            correct: 0,
        },
    ],

    // Round 13
    [
        {
            question: "What is the solution to the system of equations: x + y = 6 and x - y = 2?",
            options: ["(4, 2)", "(3, 3)", "(5, 1)", "(6, 0)"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [2, 5; 7, 1]?",
            options: ["-29", "29", "30", "25"],
            correct: 0,
        },
        {
            question: "What is the dot product of the vectors [1, 2, 3] and [4, 5, 6]?",
            options: ["32", "33", "35", "30"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [5, 4; 2, 3]?",
            options: ["7, 1", "5, 3", "3, 4", "4, 5"],
            correct: 0,
        },
        {
            question: "What is the magnitude of the vector [4, 3]?",
            options: ["5", "6", "7", "4"],
            correct: 0,
        },
    ],

    // Round 14
    [
        {
            question: "What is the inverse of the matrix [3, 0; 0, 2]?",
            options: ["[1/3, 0; 0, 1/2]", "[1/3, 0; 0, 1]", "[0, 1; 1, 0]", "[3, 0; 0, 2]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 4, 5, 6; 7, 8, 9]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [2, 1; 1, 2]?",
            options: ["3, 1", "2, 2", "1, 3", "4, 0"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [2, 1, 1; 1, 2, 3; 1, 3, 4]?",
            options: ["4", "5", "6", "7"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [3, 4, 5] and [6, 7, 8]?",
            options: ["[-3, 6, -3]", "[0, -3, 2]", "[1, -2, 1]", "[2, -1, 0]"],
            correct: 0,
        },
    ],

    // Round 15
    [
        {
            question: "What is the determinant of the matrix [4, 2, 1; 3, 5, 7; 8, 6, 9]?",
            options: ["45", "43", "44", "42"],
            correct: 0,
        },
        {
            question: "What is the eigenvector corresponding to the eigenvalue 3 for the matrix [1, 1; 1, 1]?",
            options: ["[1, 1]", "[1, -1]", "[0, 1]", "[1, 0]"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 3; 2, 5]?",
            options: ["[5, -3; -2, 1]", "[1, 2; 3, 4]", "[3, -1; -2, 5]", "[2, 3; 1, 4]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 4, 5, 6; 7, 8, 9]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [1, -1, 1] and [2, 3, -1]?",
            options: ["[4, -3, 5]", "[3, 4, -5]", "[2, 3, -4]", "[1, -3, 2]"],
            correct: 0,
        },
    ],

    // Round 16
    [
        {
            question: "What is the dot product of the vectors [1, -1, 2] and [2, 2, -1]?",
            options: ["0", "1", "2", "-1"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [2, 4, 1; 3, 2, 5; 1, 3, 2]?",
            options: ["-1", "0", "2", "1"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [2, 1; 1, 2]?",
            options: ["[0.5, -0.25; -0.25, 0.5]", "[0.25, 0.75; -0.5, 0.5]", "[1, 0; 0, 1]", "[0.5, 0.5; 0.5, 0.5]"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [1, 2; 3, 4]?",
            options: ["5, -1", "3, 1", "2, -2", "4, 2"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 0, 0, 0; 7, 8, 9]?",
            options: ["0", "1", "2", "3"],
            correct: 1,
        },
    ],
  // Round 17
    [
        {
            question: "What is the determinant of the matrix [1, 2, 1; 4, 5, 6; 7, 8, 9]?",
            options: ["6", "7", "8", "9"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [1, 2; 2, 1]?",
            options: ["3, -1", "2, -2", "1, 1", "2, 2"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: 2x + 3y = 5, 3x - y = 4?",
            options: ["(1, 1)", "(2, 0)", "(3, -1)", "(4, -2)"],
            correct: 0,
        },
        {
            question: "What is the dot product of the vectors [3, -2, 1] and [2, 1, 4]?",
            options: ["5", "6", "7", "8"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [4, 1; 2, 3]?",
            options: ["[3, -1; -2, 4]", "[2, -1; -1, 2]", "[1, -3; 2, 4]", "[4, 2; 1, 3]"],
            correct: 0,
        },
    ],

    // Round 18
    [
        {
            question: "What is the cross product of the vectors [1, 2, 3] and [4, 5, 6]?",
            options: ["[-3, 6, -3]", "[3, -6, 3]", "[6, -3, 3]", "[5, 4, 2]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 1, 2, 3; 1, 2, 3]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [3, -1; 4, 2]?",
            options: ["5, 0", "2, 3", "4, 1", "3, -1"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [3, 2, 1; 2, 3, 1; 1, 1, 4]?",
            options: ["16", "15", "14", "13"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: 3x + 4y = 10, 2x - y = 5?",
            options: ["(3, -1)", "(2, 1)", "(5, -2)", "(4, 3)"],
            correct: 0,
        },
    ],

    // Round 19
    [
        {
            question: "What is the inverse of the matrix [1, 2; 3, 4]?",
            options: ["[-2, 1; 1.5, -0.5]", "[2, -1; -3, 1]", "[1, -2; -1.5, 3]", "[3, 2; -1, -4]"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [5, 2, 1] and [3, 4, 2]?",
            options: ["[0, -7, 14]", "[3, 0, -14]", "[0, -14, 7]", "[14, -7, 0]"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [5, -2; -2, 5]?",
            options: ["7, 3", "5, 1", "3, 7", "5, -2"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [1, 2; 3, 5]?",
            options: ["7", "5", "4", "3"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: x + y = 10, 2x - y = 4?",
            options: ["(7, 3)", "(5, 5)", "(4, 6)", "(8, 2)"],
            correct: 0,
        },
    ],

    // Round 20
    [
        {
            question: "What is the rank of the matrix [1, 0, 2; 0, 1, 3; 0, 0, 4]?",
            options: ["1", "2", "3", "0"],
            correct: 2,
        },
        {
            question: "What is the eigenvalue of the matrix [2, 1; 1, 2]?",
            options: ["3, 1", "1, 3", "2, 2", "4, 0"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [1, 1, 1] and [2, 2, 2]?",
            options: ["[0, 0, 0]", "[0, 1, -1]", "[1, 1, 1]", "[2, 2, 2]"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [2, 1, 3; 0, 1, 4; 1, 2, 5]?",
            options: ["3", "2", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the dot product of the vectors [1, 3, 2] and [4, -2, 1]?",
            options: ["6", "7", "8", "9"],
            correct: 0,
        },
    ],
   // Round 21
    [
        {
            question: "What is the determinant of the matrix [1, 4, 3; 2, 1, 5; 7, 3, 6]?",
            options: ["1", "-1", "2", "3"],
            correct: 1,
        },
        {
            question: "What is the eigenvalue of the matrix [3, -1; 1, 3]?",
            options: ["4, 2", "3, 2", "5, -1", "4, 1"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [3, 2; 1, 4]?",
            options: ["[4/10, -2/10; -1/10, 3/10]", "[3/10, -2/10; -1/10, 4/10]", "[2/10, 3/10; -1/10, 1/10]", "[1/10, 4/10; 3/10, 2/10]"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [2, 1, 0] and [3, 4, 5]?",
            options: ["[5, -10, 2]", "[2, -5, 7]", "[7, -2, 10]", "[3, 4, 5]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 2, 4, 6; 3, 6, 9]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
    ],

    // Round 22
    [
        {
            question: "What is the dot product of the vectors [2, 4, 6] and [1, 0, 2]?",
            options: ["14", "12", "16", "10"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: 2x + y = 10, 3x - y = 5?",
            options: ["(3, 4)", "(4, 2)", "(5, 3)", "(2, 6)"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [2, 3; 5, 4]?",
            options: ["6, 0", "7, 3", "4, 3", "6, 2"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [4, 2, 3; 5, 7, 6; 8, 9, 2]?",
            options: ["-5", "4", "-6", "0"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [2, 3; 1, 2]?",
            options: ["[2/1, -3/1; -1/1, 2/1]", "[1, 0; 0, 2]", "[3, 1; -1, -2]", "[1, -3; -1, 2]"],
            correct: 0,
        },
    ],

    // Round 23
    [
        {
            question: "What is the eigenvalue of the matrix [1, 0, 0; 0, 2, 0; 0, 0, 3]?",
            options: ["1, 2, 3", "1, 1, 2", "3, 2, 1", "2, 3, 1"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 0, 0; 0, 1, 0; 0, 0, 1]?",
            options: ["1", "2", "3", "0"],
            correct: 2,
        },
        {
            question: "What is the dot product of the vectors [1, 2, 3] and [4, -5, 6]?",
            options: ["12", "14", "16", "18"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [5, -3; 2, 4]?",
            options: ["[4/23, 3/23; -2/23, 5/23]", "[5/23, -3/23; 2/23, 4/23]", "[4/23, 3/23; -1/23, 2/23]", "[2/23, 5/23; -3/23, 4/23]"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: x + y = 3, 3x - y = 5?",
            options: ["(2, 1)", "(1, 2)", "(3, 0)", "(0, 3)"],
            correct: 0,
        },
    ],

    // Round 24
    [
        {
            question: "What is the eigenvalue of the matrix [2, 1; 1, 2]?",
            options: ["3, 1", "2, 2", "4, 0", "5, -1"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [1, 2, 3; 0, 4, 5; 6, 7, 8]?",
            options: ["-1", "0", "1", "2"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 4, 5, 6; 7, 8, 9]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 1; 1, 1]?",
            options: ["[1, 1; 1, 1]", "No inverse exists", "[2, 2; 2, 2]", "[0, 0; 0, 0]"],
            correct: 1,
        },
        {
            question: "What is the cross product of the vectors [2, 3, 4] and [1, 0, -1]?",
            options: ["[3, 6, -3]", "[1, -4, 7]", "[0, 7, -2]", "[2, 1, 0]"],
            correct: 0,
        },
    ],
   // Round 25
    [
        {
            question: "What is the eigenvalue of the matrix [1, 2; 2, 1]?",
            options: ["3, -1", "2, 2", "1, 3", "4, 0"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [2, 4; 1, 3]?",
            options: ["2", "5", "4", "1"],
            correct: 1,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 4, 5, 6; 7, 8, 9]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: 3x + 2y = 10, x - y = 1?",
            options: ["(3, 2)", "(4, 1)", "(2, 3)", "(1, 4)"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 3; 2, 4]?",
            options: ["[4, -3; -2, 1]", "[3, -2; -1, 1]", "[4, 2; 1, 3]", "[5, -2; -3, 2]"],
            correct: 0,
        },
    ],

    // Round 26
    [
        {
            question: "What is the cross product of the vectors [2, -1, 3] and [4, 0, 1]?",
            options: ["[1, -10, 4]", "[3, -4, 4]", "[5, -2, 3]", "[4, 1, -2]"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [3, 1; 2, 4]?",
            options: ["5, 2", "4, 3", "6, 2", "5, 3"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [3, 4, 5; 1, 2, 3; 6, 7, 8]?",
            options: ["-3", "4", "5", "6"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: x + y + z = 6, x + 2y + 3z = 14, x + 3y + 2z = 12?",
            options: ["(1, 2, 3)", "(2, 2, 2)", "(3, 3, 3)", "(4, 1, 1)"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [2, 1; 1, 2]?",
            options: ["[2/3, -1/3; -1/3, 2/3]", "[1/3, -2/3; -1/3, 2/3]", "[1/2, -1/2; -1/2, 1/2]", "[2/5, 1/5; -1/5, 2/5]"],
            correct: 0,
        },
    ],

    // Round 27
    [
        {
            question: "What is the rank of the matrix [3, 1, 1; 1, 2, 1; 1, 1, 2]?",
            options: ["2", "1", "3", "0"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [2, 3, 4; 1, 2, 3; 5, 6, 7]?",
            options: ["9, -1", "6, 1", "5, 3", "8, 2"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: 2x + 3y = 7, 4x + 5y = 10?",
            options: ["(1, 2)", "(2, 1)", "(3, 3)", "(4, 4)"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [1, 2, 3; 0, 1, 4; 1, 1, 2]?",
            options: ["5", "3", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [1, 0, 2] and [3, 4, 1]?",
            options: ["[8, -5, -4]", "[5, -4, -8]", "[4, -5, 8]", "[8, 4, -5]"],
            correct: 0,
        },
    ],

    // Round 28
    [
        {
            question: "What is the inverse of the matrix [5, -2; 3, 4]?",
            options: ["[4/23, 2/23; -3/23, 5/23]", "[5/23, -2/23; 3/23, 4/23]", "[2/23, -3/23; 1/23, 4/23]", "[4/23, 5/23; 2/23, -3/23]"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [1, 0, 0; 0, 2, 0; 0, 0, 3]?",
            options: ["1, 2, 3", "2, 3, 1", "3, 1, 2", "1, 1, 2"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [1, 2; 3, 4]?",
            options: ["-1", "1", "0", "5"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [1, 1, 1] and [2, 2, 2]?",
            options: ["[0, 0, 0]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3, 3]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 2, 4, 6; 3, 6, 9]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
    ],
   // Round 29
    [
        {
            question: "What is the eigenvalue of the matrix [4, 1; 2, 3]?",
            options: ["5, 2", "4, 3", "3, 2", "6, 1"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [1, 3, 2; 2, 1, 3; 3, 2, 1]?",
            options: ["0", "1", "2", "-1"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: x + 2y = 8, 2x - y = 3?",
            options: ["(5, 3)", "(4, 2)", "(3, 4)", "(2, 5)"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [2, 1; 3, 4]?",
            options: ["[4, -1; -3, 2]", "[2, -1; -3, 2]", "[4, 1; 3, 2]", "[3, -2; -1, 2]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 0, 1; 1, 1, 1; 1, 2, 3]?",
            options: ["3", "2", "1", "0"],
            correct: 0,
        },
    ],

    // Round 30
    [
        {
            question: "What is the cross product of the vectors [1, 2, 3] and [4, 5, 6]?",
            options: ["[-3, 6, -3]", "[3, -6, 3]", "[0, 0, 0]", "[1, -2, 3]"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [0, 2, 3; 2, 1, 4; 3, 4, 5]?",
            options: ["6, -1, 2", "5, 0, 1", "4, 3, 2", "3, 2, 1"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [2, -3, 1; 4, 5, -6; 7, 8, 9]?",
            options: ["45", "60", "0", "16"],
            correct: 1,
        },
        {
            question: "What is the solution to the system of equations: x - 2y = 4, 3x + y = 7?",
            options: ["(3, -1)", "(1, 3)", "(2, 1)", "(4, 2)"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 1; 1, 1]?",
            options: ["[1, 1; 1, 1]", "[0, 0; 0, 0]", "No inverse exists", "[2, 2; 2, 2]"],
            correct: 2,
        },
    ],

    // Round 31
    [
        {
            question: "What is the eigenvalue of the matrix [3, 4; 2, 1]?",
            options: ["4, 0", "3, -1", "2, 2", "5, 1"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [2, 3; 4, 5]?",
            options: ["-2", "3", "1", "2"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 1, 1; 2, 2, 2; 3, 3, 3]?",
            options: ["3", "2", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [1, 3, 2] and [4, 0, 1]?",
            options: ["[3, -2, -12]", "[2, -5, 8]", "[1, -4, 7]", "[0, 5, -3]"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: x + y + z = 6, 2x + 3y + z = 7, 3x + 2y + 2z = 8?",
            options: ["(1, 2, 3)", "(2, 1, 3)", "(3, 2, 1)", "(1, 1, 4)"],
            correct: 0,
        },
    ],

    // Round 32
    [
        {
            question: "What is the determinant of the matrix [1, 2, 3; 0, 1, 4; 5, 6, 7]?",
            options: ["-10", "5", "1", "0"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [1, 0, 2; 3, 4, 5; 1, 0, 6]?",
            options: ["7, 4, 2", "8, 3, 1", "9, 1, 3", "5, 3, 2"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 2; 3, 4]?",
            options: ["[4, -2; -3, 1]", "[2, -1; -3, 4]", "[4, 2; -3, -1]", "[3, -2; -1, 1]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 1, 2, 3; 1, 2, 3]?",
            options: ["3", "1", "0", "2"],
            correct: 1,
        },
        {
            question: "What is the cross product of the vectors [2, 3, 4] and [4, 5, 6]?",
            options: ["[-1, 2, -1]", "[1, -2, 1]", "[2, -1, 1]", "[0, 0, 0]"],
            correct: 0,
        },
    ],
  // Round 33
    [
        {
            question: "What is the eigenvalue of the matrix [5, 2; 1, 3]?",
            options: ["6, 2", "5, 3", "4, 1", "3, 2"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [1, 4, 7; 2, 5, 8; 3, 6, 9]?",
            options: ["0", "1", "-1", "3"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 1; 2, 4, 3; 3, 6, 4]?",
            options: ["3", "2", "1", "0"],
            correct: 1,
        },
        {
            question: "What is the solution to the system of equations: x + y = 7, 2x - y = 3?",
            options: ["(4, 3)", "(3, 4)", "(2, 5)", "(5, 2)"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 1; 1, 1]?",
            options: ["[1, 1; 1, 1]", "[2, 1; 1, 2]", "No inverse exists", "[1, -1; -1, 1]"],
            correct: 2,
        },
    ],

    // Round 34
    [
        {
            question: "What is the cross product of the vectors [3, 1, 4] and [2, -1, 3]?",
            options: ["[7, -6, -5]", "[6, -5, -4]", "[5, -4, 3]", "[5, 4, 7]"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [2, 3, 4; 1, 2, 3; 5, 6, 7]?",
            options: ["6, 1, 2", "3, 4, 5", "5, 2, 1", "2, 4, 3"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [2, 1, 3; 1, 1, 1; 3, 2, 1]?",
            options: ["1", "-1", "0", "2"],
            correct: 1,
        },
        {
            question: "What is the solution to the system of equations: 3x + 2y = 5, 2x - y = 1?",
            options: ["(1, 1)", "(2, -1)", "(1, -2)", "(3, 2)"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 2, 3; 1, 2, 3; 1, 2, 3]?",
            options: ["3", "1", "0", "2"],
            correct: 1,
        },
    ],

    // Round 35
    [
        {
            question: "What is the determinant of the matrix [4, 2, 1; 3, 1, 5; 2, 3, 6]?",
            options: ["12", "14", "16", "18"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [1, 2; 3, 4]?",
            options: ["5, -1", "4, 1", "3, 0", "2, 3"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [3, -2, 1] and [1, 4, 2]?",
            options: ["[-10, 7, 14]", "[7, -14, 10]", "[10, -7, 14]", "[14, -10, 7]"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: 3x - y = 4, x + 2y = 7?",
            options: ["(3, 2)", "(4, 1)", "(5, 3)", "(2, 4)"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 0, 1; 0, 1, 1; 1, 1, 1]?",
            options: ["[1, -1, 0; 0, 1, -1; -1, 1, 1]", "[1, 1, 0; 0, 1, 1; -1, 1, 0]", "No inverse exists", "[0, -1, 1; 1, 0, 1; -1, -1, 1]"],
            correct: 0,
        },
    ],

    // Round 36
    [
        {
            question: "What is the eigenvalue of the matrix [1, 2; 3, 4]?",
            options: ["5, -1", "6, 0", "4, 1", "3, 2"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [5, -2, 3; 1, 2, 4; 7, 8, 9]?",
            options: ["6", "-3", "5", "10"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: 2x + y = 10, x - y = 2?",
            options: ["(6, 4)", "(8, 2)", "(7, 3)", "(10, 2)"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [1, 0, 0] and [0, 1, 0]?",
            options: ["[0, 0, 1]", "[0, 0, -1]", "[1, 1, 0]", "[0, 0, 0]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 3, 5; 2, 6, 10; 3, 9, 15]?",
            options: ["3", "2", "1", "0"],
            correct: 1,
        },
    ],
  // Round 37
    [
        {
            question: "What is the eigenvalue of the matrix [4, 1; 2, 3]?",
            options: ["5, 2", "4, 3", "3, 2", "6, 1"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [1, 2, 3; 2, 1, 4; 3, 4, 5]?",
            options: ["0", "1", "-1", "2"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 1, 2; 1, 2, 3; 2, 3, 4]?",
            options: ["3", "2", "1", "0"],
            correct: 1,
        },
        {
            question: "What is the solution to the system of equations: 3x + 4y = 12, 2x - y = 1?",
            options: ["(2, 1)", "(3, 2)", "(1, 3)", "(4, 0)"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 2; 3, 4]?",
            options: ["[4, -2; -3, 1]", "[2, -1; -3, 4]", "[1, -1; -2, 1]", "[2, 1; 3, 4]"],
            correct: 0,
        },
    ],

    // Round 38
    [
        {
            question: "What is the cross product of the vectors [4, 1, 2] and [1, 3, 5]?",
            options: ["[7, -17, 11]", "[11, 7, -17]", "[-7, 17, -11]", "[17, -11, 7]"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [3, 2, 1; 1, 2, 3; 1, 1, 1]?",
            options: ["6, -1, -1", "5, 2, 3", "3, 4, 2", "4, -1, 0"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [1, 1, 1; 2, 2, 2; 3, 3, 3]?",
            options: ["0", "1", "2", "3"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: x + y = 5, 2x - y = 4?",
            options: ["(3, 2)", "(2, 3)", "(1, 4)", "(4, 1)"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [2, 3, 5; 4, 6, 10; 1, 2, 3]?",
            options: ["3", "2", "1", "0"],
            correct: 1,
        },
    ],

    // Round 39
    [
        {
            question: "What is the determinant of the matrix [2, 3, 1; 1, 2, 3; 4, 5, 6]?",
            options: ["0", "1", "2", "-1"],
            correct: 0,
        },
        {
            question: "What is the eigenvalue of the matrix [1, 0, 0; 0, 2, 0; 0, 0, 3]?",
            options: ["1, 2, 3", "0, 1, 2", "1, 2, 4", "2, 3, 4"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: 2x + y = 5, x - 3y = 4?",
            options: ["(3, 2)", "(1, 3)", "(2, 1)", "(4, 3)"],
            correct: 0,
        },
        {
            question: "What is the cross product of the vectors [3, 4, 1] and [1, 2, 3]?",
            options: ["[10, -7, 5]", "[5, -10, 7]", "[7, 10, -5]", "[7, 5, -10]"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [3, 3, 3; 2, 2, 2; 1, 1, 1]?",
            options: ["3", "2", "1", "0"],
            correct: 1,
        },
    ],

    // Round 40
    [
        {
            question: "What is the eigenvalue of the matrix [4, 1, 1; 1, 3, 1; 1, 1, 2]?",
            options: ["5, 2, 1", "3, 1, 4", "6, 2, 1", "4, 2, 3"],
            correct: 0,
        },
        {
            question: "What is the determinant of the matrix [1, 4, 7; 2, 5, 8; 3, 6, 9]?",
            options: ["0", "1", "2", "3"],
            correct: 0,
        },
        {
            question: "What is the rank of the matrix [1, 1, 1; 2, 2, 2; 3, 3, 3]?",
            options: ["1", "2", "3", "0"],
            correct: 0,
        },
        {
            question: "What is the solution to the system of equations: x + y + z = 6, 2x + 3y + z = 7, 3x + 2y + 2z = 8?",
            options: ["(1, 2, 3)", "(2, 1, 3)", "(3, 2, 1)", "(1, 1, 4)"],
            correct: 0,
        },
        {
            question: "What is the inverse of the matrix [1, 1; 1, 1]?",
            options: ["[1, 1; 1, 1]", "[2, 1; 1, 2]", "No inverse exists", "[1, -1; -1, 1]"],
            correct: 2,
        },
    ],
  ];
  
  
// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
