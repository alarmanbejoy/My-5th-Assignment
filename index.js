document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM content to be fully loaded

    // Find the button and section elements
    const firstBannerBtn = document.getElementById("first-banner-btn");
    const paribahanSection = document.getElementById("p-h-paribahanSection");

    // Add click event listener to the button
    firstBannerBtn.addEventListener("click", function () {
        // Scroll the section into view
        paribahanSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});





    // Function to show the Success card
    function showSuccessCard() {
        const successCard = document.getElementById('successCard');
        successCard.classList.remove('hidden');
      }
      
      // Function to hide the Success card
      function hideSuccessCard() {
        const successCard = document.getElementById('successCard');
        successCard.classList.add('hidden');
      }
      
      // Event listener for the "Next" button
      document.getElementById('nextbtn').addEventListener('click', function() {
        showSuccessCard();
      });
      
      // Event listener for the "Continue" button
      document.getElementById('continueBtn').addEventListener('click', function() {
        hideSuccessCard();
      });




      document.addEventListener("DOMContentLoaded", function() {
        // Wait for the DOM content to be fully loaded
    
        // Variables to track seat counts and total price
        let remainingSeats = 8;
        let seatCount = 0;
        let totalPrice = 0;
        let clickCount = 0;
    
        // Find all seat buttons
        const seatButtons = document.querySelectorAll('#A1, #A2, #A3, #A4, #B1, #B2, #B3, #B4');
    
        // Function to handle seat button click
        function handleSeatClick(event) {
            const seatButton = event.target;
    
            // Check if the seat is already selected
            if (seatButton.classList.contains('bg-green-500')) {
                alert('You have already selected this seat.');
                return;
            }
    
            // Check if all available seats are already selected
            if (seatCount >= 4) {
                alert('You can purchase 4 tickets.');
                return;
            }
    
            // Update seat button appearance
            seatButton.classList.add('bg-green-500');
            seatButton.classList.remove('bg-gray-100');
            seatButton.classList.add('text-white');
    
            // Update remaining seats count
            remainingSeats--;
    
            // Update seat count
            seatCount++;
            clickCount++;
    
            // Update Remaining Seats display
            document.getElementById('RemainingSeats').textContent = remainingSeats;
    
            // Update seat count display
            document.getElementById('seatCountIncrage').textContent = seatCount;
    
            // Create new elements for selected seat details
            const selectedSeatElement = document.createElement('h1');
            const seatTypeElement = document.createElement('h1');
            const seatPriceElement = document.createElement('h1');
    
            // Set values for the new elements
            selectedSeatElement.textContent = seatButton.id;
            seatTypeElement.textContent = 'Economy';
            seatPriceElement.textContent = '550';
    
            // Append the new elements to the selected seat section
            const selectedValueImport = document.getElementById(`SelectedValueImport${Math.ceil(clickCount / 1)}`);
            selectedValueImport.appendChild(selectedSeatElement);
            selectedValueImport.appendChild(seatTypeElement);
            selectedValueImport.appendChild(seatPriceElement);
    
            // Update total price
            totalPrice += 550;
            document.getElementById('totalPriceValue').textContent = totalPrice;
    
            // Update grand total price
            updateGrandTotalPrice();
        }
    
        // Add click event listeners to all seat buttons
        seatButtons.forEach(seatButton => {
            seatButton.addEventListener('click', handleSeatClick);
        });
    
        // Function to update grand total price
        function updateGrandTotalPrice() {
            const couponCode = document.getElementById('inputField').value;
            let grandTotalPrice = totalPrice;
            if (couponCode === 'NEW15') {
                // Apply 15% discount
                const discount = totalPrice * 0.15;
                grandTotalPrice -= discount;
            } else if (couponCode === 'Couple 20') {
                // Apply 20% discount
                const discount = totalPrice * 0.2;
                grandTotalPrice -= discount;
            }
    
            // Update grand total price display
            document.getElementById('grandTotalPriceValue').textContent = grandTotalPrice;
        }
    
        // Apply coupon code function
        document.getElementById('buttonEnter').addEventListener('click', function() {
            const couponCode = document.getElementById('inputField').value;
            if (couponCode === 'NEW15' || couponCode === 'Couple 20') {
                updateGrandTotalPrice();
    
                // Hide input field and apply button
                document.getElementById('inputAndApplySection').classList.add('hidden');
            } else {
                alert('Invalid coupon code.');
            }
        });
    });